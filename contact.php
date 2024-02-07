<?php
    include "./includes/templates/header.php"
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/contact.css">
</head>
<body>
    <main class="contact_main">

        <h2>Formulario de Contacto</h2>
        <form id="contactForm" method="post">
            <label for="nombre">Nombre:</label><br>
            <input type="text" id="nombre" name="nombre" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="mensaje">Mensaje:</label><br>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br><br>

            <input class="button" type="submit" value="Enviar" id="enviarCorreo">
        </form>
    </main>
    
    <script src="./js/contact.js"></script>
</body>
</html>

<?php
    include "./includes/templates/footer.php"
?>