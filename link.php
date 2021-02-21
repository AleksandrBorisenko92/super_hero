<?php
$connect = mysqli_connect("localhost","root","","super_hero_db") OR DIE ("Не могу создать соединение ");;

$mysql = mysqli_query($connect,"INSERT INTO posts (nickName, realName,originDescription , superPowers, catchPhase, images)
VALUES ('$_POST[nickName]', '$_POST[realName]', '$_POST[originDescription]', '$_POST[superPowers]', '$_POST[catchPhase]', '$_POST[images]')";

if (!mysqli_query($mysql)) {
        die('Error: ' .mysqli_error());
    }
    echo "Запись добавлена";
    mysqli_close($connect);
?>