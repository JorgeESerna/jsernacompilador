<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Compiladores</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
<script language="javascript" type="text/javascript" src="js/code.js"></script>
    <?php

    if (!empty($_POST)) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        /*if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image. 100";
        $uploadOk = 0;
    }
}*/
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "Lo siento, el archivo ya existe.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            echo "Lo siento, su archivo es muy grande.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if ($imageFileType != "txt" && $imageFileType != "java") {
            echo "Lo siento, solo se aceptan archivos txt & java.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Lo siento, tu archivo no se puede cargar.";
            // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "The file " . basename($_FILES["fileToUpload"]["name"]) . " has been uploaded.";
            } else {
                echo "Lo siento,hubo un error al cargar el archivo.";
            }
        }
    }
    ?>
    <h1>Jorge Serna</h1>
    <h2>Compiladores</h2>
    <table>
        <tr>
            <td>Archivo Fuente <button onclick="descargaFuente()" class="button">Descarga</button></td>
            <td>Análisis Léxico<button onclick="descargaanalisis()" class="button">Descarga</button></td>
            <td>Tokens <button onclick="descargaTokens()" class="button">Descarga</button></td>
        </tr>
        <tr>
            <td><textarea name="Texto original" style="resize:none" placeholder="texto u codigo" id="textarea1" cols="40" rows="15">
            <?php
            if (!empty($target_file) && file_exists($target_file)) {
                $fileContent = file_get_contents($target_file);
                echo $fileContent;
                unlink($target_file);
            }
            ?></textarea></td>
            <td><textarea name="token1" style="resize:none" placeholder="Analisis lexico" id="textarea2" cols="40" rows="15"></textarea></td>
            <td><textarea name="" style="resize:none" placeholder="Tokens" id="textarea3" cols="40" rows="15"></textarea></td>
        </tr>
    </table>
    <button class="btn btn-sm btn-success">Cargar Archivo</button>
    <br><br>
    <button class="btn btn-sm btn-primary">Descarga</button>
    <form action="index.php" method="post" enctype="multipart/form-data">
        Selecciona un archivo
        <input type="file" name="fileToUpload" id="fileToUpload"> <br>
        <input type="submit" value="Subir Archivo" name="submit">
    </form>
    <a href="https://jsernacompilador.000webhostapp.com/compiladores"> 00webghost</a> <br>
    <a href="https://jsernacompilador.herokuapp.com/compiladores"> heroku </a> <br>
    <a href="/compiladores/files/ejemplo1.txt" download>descargar ejemplo 1</a> <br>
    <a href="/compiladores/files/ejemplo2.txt" download>descargar ejemplo 2</a> <br>
    
    <input type="button" value="ejemplo 1" Onclick="texto1()">
    <input type="button" value="ejemplo 2" Onclick="texto2()">    
    <input type="button" value="Tokenizar" OnClick="tokenizar(); Tokenizado()">
    <input type="button" value="Palabras Reservadas" Onclick="alerta()">
    <input type="button" value="Tokens" Onclick="alerta_tokens()">


    


</html>