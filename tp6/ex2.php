<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex2</title>
</head>
<body>
    <form action="page1.php" method="POST">
        <label for="nom">Nom</label><input type="text" name="nom" id="nom"><br>
        <label for="prenom">Prenom</label><input type="text" name="prenom" id="prenom"><br>
        Sexe<br>
        <label for="sexe">Male</label> <input type="radio" name="sexe" id="sexe">
        <label for="sexe2">Female</label> <input type="radio" name="sexe" id="sexe2">
        <br>
        <label for="class">Select Class</label>
        <select name="class" id="class">
            <option value="">--Veuillez choisir une option</option>
            <option value="Web">Web</option>
            <option value="XML">XML</option>
            <option value="Java">Java</option>
            <option value="Unix">Unix</option>
            <option value="C">C</option>
            <option value="C#">C#</option>
        </select><br>
        <input type="submit" value="envoyer">
    </form>
</body>
</html>