<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumnos</title>
</head>
<body class="text-center">

<?php

require 'config.php';

if(isset($_POST['Nombre']) && empty ($_POST['Nombre']) == false) {

$Nombre = addslashes($_POST['Nombre']);
$Descripcion = addslashes($_POST['Descripcion']);
$Fecha_inicio = addslashes($_POST['Fecha_inicio']);
$Fecha_final = addslashes($_POST['Fecha_final']);
$Nom_alumno = addslashes($_POST['Nom_alumno']);

$insertaralumnos = "INSERT INTO alumnos SET Nombre = '$Nombre', Descripcion = '$Descripcion', Fecha_inicio = '$Fecha_inicio', Fecha_final = '$Fecha_final', Nom_alumno = '$Nom_alumno'";
$pdo->query($insertaralumnos);

header("Location: index.php");
}

?>
<from method="post" class="from-signin">
    <input type="nombre" class="from-control" placeholder="Nombre" name="Nombre"required autofocus>
    <input type="Descripcion" class="from-control" placeholder="Descripcion" name="Descripcion" required>
    <input type="date" class="from-control" placeholder="Fecha_inicio" name="Fecha_inicio"required>
    <input type="date" class="from-control" placeholder="Fecha_final" name="Fecha_final"required>
    <input type="nom_alumno" class="from-control" placeholder="Nom_alumno" name="Nom_alumno"required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Registrar nuevo Alumno</button>
    <p class="mt-5 mb-3 text-muted">&copy; </p>

</from>
</body>
</html>