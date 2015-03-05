<?php
include_once 'psl-config.php';

$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE, PORT);
if ($mysqli->connect_error) {
    echo mysqli_errno($mysqli);
    exit();
}
mysqli_set_charset($mysqli,"utf8");