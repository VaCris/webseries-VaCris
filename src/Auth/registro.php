<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

function validarCorreo($correo) {
    return filter_var($correo, FILTER_VALIDATE_EMAIL);
}

function correoRegistrado($correo, $conexion) {
    $sql = "SELECT COUNT(*) as count FROM registro_usuario WHERE email = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "s", $correo);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    return $row['count'] > 0;
}

function registrarUsuario($nombre, $correo, $contraseña, $conexion) {
    $hashedPassword = password_hash($contraseña, PASSWORD_BCRYPT);
    $sql = "INSERT INTO registro_usuario (usuario, email, password) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "sss", $nombre, $correo, $hashedPassword);
    return mysqli_stmt_execute($stmt);
}

if (isset($_POST['username'], $_POST['email'], $_POST['password'])) {
    $nombre = $_POST['username'];
    $correo = $_POST['email'];
    $contraseña = $_POST['password'];

    $hostname = "localhost";
    $username = "root";
    $passwordDB = "vvv";
    $dbname = "webservice";

    $conexion = mysqli_connect($hostname, $username, $passwordDB, $dbname);

    if (!$conexion) {
        die("Error al conectar: " . mysqli_connect_error());
    }

    if (!validarCorreo($correo)) {
        echo "El correo electrónico proporcionado no es válido.";
        exit();
    }

    if (correoRegistrado($correo, $conexion)) {
        echo "El correo electrónico ya está registrado.";
        exit();
    }

    if (registrarUsuario($nombre, $correo, $contraseña, $conexion)) {
        echo "<script>document.querySelector('.popup').classList.add('active');</script>";
    } else {
        echo "Error al registrar el usuario.";
    }

    mysqli_close($conexion);
} else {
    echo "Error: hay campos vacios.";
}

