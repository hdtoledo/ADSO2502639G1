
<?php

require 'config.php';

if(isset($_GET['id']) && empty($_GET['id']) == false) {
    $id = addslashes($_GET['id']);

    $deletaralumno = "DELETE FROM alumnos WHERE id = '$id'";
    $pdo->query($deletaralumno);

    header("Location: index.php");

} else {
    header("Location: index.php");
}

?>