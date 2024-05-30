<?php
session_start();

if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $hostname = "localhost";
    $username = "root";
    $passwordDB = "admin";
    $dbname = "webservice";

    $conexion = mysqli_connect($hostname, $username, $passwordDB, $dbname);
    
    if (!$conexion) {
        die("Error al conectar: " . mysqli_connect_error());
    }

    $email = mysqli_real_escape_string($conexion, $email);
    $sqlSelect = "SELECT * FROM registro_usuario WHERE email = ?";
    $stmtSelect = mysqli_prepare($conexion, $sqlSelect);
    mysqli_stmt_bind_param($stmtSelect, "s", $email);
    mysqli_stmt_execute($stmtSelect);
    $result = mysqli_stmt_get_result($stmtSelect);

    if ($result && $row = mysqli_fetch_assoc($result)) {
        $storedPassword = $row['password'];
        $salt = $row['salt'];
        $hashedPassword = hash('sha256', $salt . $password);

        if ($hashedPassword == $storedPassword) {
            $_SESSION['username'] = $row['usuario'];
            $_SESSION['email'] = $row['email'];

            header("Location: ../../../public/pages/Home.html"); 
            exit();
        } else {
            $error_message = "Contraseña incorrecta.";
        }
    } else {
        $error_message = "Usuario no encontrado.";
    }

    mysqli_stmt_close($stmtSelect);
    mysqli_close($conexion);
} else {
    $error_message = "Error: una o más claves no existen en el array \$_POST";
}

