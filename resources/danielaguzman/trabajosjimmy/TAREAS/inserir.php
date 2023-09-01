<?php

require 'config.php';

if(isset($_POST['Nombre']) && empty ($_POST['Nombre']) == false) {

    $senha = '';

    $Nombre = addslashes($_POST['Nombre']);
    $Descripcion = addslashes($_POST['Descripcion']);
    $Fecha_inicio = addslashes($_POST['Fecha_inicio']);
    $Fecha_final = addslashes($_POST['Fecha_final']);
    $Nom_alumno = addslashes($_POST['Nom_alumno']);
    

    $inserirusuarios = "INSERT alumnos SET Nombre = '$Nombre', Descripcion = '$Descripcion', Fecha_inicio = '$Fecha_inicio', Fecha_final = '$Fecha_final', Nom_alumno = '$Nom_alumno'";
    $pdo->query($inserirusuarios);

    header("Location: index.php");
}

?>