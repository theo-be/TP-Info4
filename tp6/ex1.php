<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex1</title>
</head>
<body>
    <?php

    // Question 1

    function toto($L, $C) {
        echo '<table>';
        for ($i = 0; $i < $L; $i++) {
            echo '<tr>';
            echo '<td>X</td>';
            for ($j = 1; $j < $C - 1; $j++) {
                if (!($i % 2)) echo '<td>X</td>';
                else echo '<td></td>';
            }
            echo '<td>X</td>';
            echo '</tr>';
        }
        echo '</table>';
    }

    toto(7, 14);

    // Question 2

    function min_maj($str1) {
        $chaine = str_split($str1);
        $chaine2 = array();
        for ($i = 0; $i < count($chaine); $i++) {
            if ($str1[$i] == strtoupper($str1[$i])) array_push($chaine2, strtolower($str1[$i]));
            else array_push($chaine2, strtoupper($str1[$i]));
            // echo $chaine2[$i];
        }
        $chaine2 = implode('', $chaine2);
        echo $str1 . ' -> ' . $chaine2;
    }

    min_maj("wELcOME MuSSab zNEika");
    echo '<br><br><br><br><br>';

    // Question 3

    function plus_long($str) {
        $arr = explode(' ', $str);
        $mot = '';
        $pos = 0;
        for ($i = 0; $i < count($arr); $i++) {
            if (strlen($arr[$i]) > strlen($mot)) {
                $mot = $arr[$i];
                $pos = $i + 1;
            }
        }
        echo $mot . ' position ' . $pos;
    }

    plus_long("Mon premier cours commence aujourd'hui");

    ?>
</body>
</html>