<?php

require 'config.php';

$id = 0;

if(isset($_POST['Nombre']) && empty ($_POST['Nombre']) == false) {
    
    $Nombre = addslashes($_POST['Nombre']);
    $Descripcion = addslashes($_POST['Descripcion']);
    $Fecha_inicio = addslashes($_POST['Fecha_inicio']);
    $Fecha_final = addslashes($_POST['Fecha_final']);
    $Nom_alumno = addslashes($_POST['Nom_alumno']);

    $actualizarusuarios = "UPDATE alumnos SET Nombre = '$Nombre', Descripcion = '$Descripcion', Fecha_inicio = '$Fecha_inicio', Fecha_final = '$Fecha_final', Nom_alumno = '$Nom_alumno' WHERE id = '$id'";

    header("Location: index.php");
}

?>