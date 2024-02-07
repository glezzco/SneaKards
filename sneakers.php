<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">                
    <link rel="stylesheet" href="./css/sneakers.css">
</head>
<body>
    <?php
        include './includes/templates/header.php';
    ?>

<main>
    <section class="title">
        <h1 class="sneak">SneKards</h1>
            <div class="featured">
                <span>F</span>
                <span>E</span>
                <span>A</span>
                <span>T</span>
                <span>U</span>
                <span>R</span>
                <span>E</span>
                <span>D</span>
            </div>
        </section>

    <section class="container">

        <div class="row">
            <div class="col s12">
                <div class="carousel center-align" id="carousel">
                    <!-- Las imágenes se generarán aquí -->
                </div>
            </div>
        </div>
    </section>

   <section class="info_sneak">
    <div id="poster-zapatilla" style="display: none;">
        <br>
        <span id="cerrar-detalle" class="cerrar-detalle" aria-hidden="true"><i class="bi bi-x-lg"></i></span>
        <img id="imagen-poster" src="" alt="Poster de Zapatilla" style="display: none;">
        <div id="botones-detalle"></div>
    </div>
</section>

    

</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="./js/carousel.js"></script>
<script src="./js/paradise.js"></script>

<?php
        include './includes/templates/footer.php';
?>

</body>
</html>