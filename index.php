<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SneKards</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    
    <?php
        include './includes/templates/header.php';
    ?>
   
       
    <main class="main">
        <div  class="index_sneak">
            <img src="./img/sneakers/black_phant.png" alt="">
        </div>

       <section class="title">
            <h1 class="sneak">SneKards</h1>
            <div class="paradise">
                <span>P</span>
                <span>A</span>
                <span>R</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>S</span>
                <span>E</span>
            </div>
        </section>

        <p>Welcome to the <br>
            home of sneakers lovers. Here you 
            can find everything you like, 
            and if you can't find it, we'll 
            make it for you. We are a very special shop, we don't only sell slippers, our star product 
            are some works of art called "Sneakards" that will give you an incredible and different touch to your room
        </p>

        <section class="pre_footer">
            <h2 class="explore">explore the sneakers 
            we have
            </h2>    

            <div>
                <img class="arrow" src="../img/arrow.png" alt="">
                <a class="start" href="./sneakers.php">start</a> 
            </div>
            </section>
        
        
    </main>

    <?php
        include './includes/templates/footer.php';
    ?>

    <script src="./js/paradise.js"></script>
</body>
</html>