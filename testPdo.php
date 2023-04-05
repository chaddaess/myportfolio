<?php

try
{
    $connPDO=new PDO('mysql:host=localhost;dbname=test_pdo','root','',
    array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION++));

}
catch(PDOException $e)
{
    die($e->getMessage());
}


$requete="select* from personne";
$response=$connPDO->query($requete);
var_dump($response->fetchAll(PDO::FETCH_OBJ));
