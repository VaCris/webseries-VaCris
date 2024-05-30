<?php
session_start();

$hostname = "localhost"; 
$username = "root"; 
$passwordDB = "vvv";
$dbname = "webservice"; 

$conexion = mysqli_connect($hostname, $username, $passwordDB, $dbname);

if (!$conexion) {
    die("Error al conectar: " . mysqli_connect_error());
}

