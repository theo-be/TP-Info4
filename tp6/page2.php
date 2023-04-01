<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex3</title>
</head>
<body>
<?php

$tab = array("identifiant" => array("a", "b", "c", "d", "e"), "motdepasse" => array("a", "b", "c", "d", "e"));

if (in_array($_POST["username"], $tab["identifiant"]) && in_array($_POST["password"], $tab["motdepasse"]))
echo "Bienvenue.";
else header('Location:login.html');

?>
</body>
</html>