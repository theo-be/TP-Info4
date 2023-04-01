<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex4</title>
</head>
<body>
<?php

function affiche_mots() {
    $fichier = fopen("test.txt", 'r');
    $ligne = '';
    $tab = array();
    do {
        $ligne = fgets($fichier);
        $tab = explode(' ', $ligne);
        for ($i = 0; $i < count($tab); $i++) {
            if (strlen($tab[$i]) < 4) echo "$tab[$i] ";
        }
    } while ($ligne != '');
    fclose($fichier);
}

affiche_mots();

?>
</body>
</html>