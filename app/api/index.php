<!DOCTYPE html>
<html>
    <head>
        <title>Home Finder 3000</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script language="JavaScript" type="text/javascript" href="includes/jquery-2.1.3.js"></script>
        <!-- reset css so all browsers will look the same -->
        <link rel="stylesheet" href="includes/reset.css">
        <link rel="stylesheet" href="includes/bootstrap-3.3.2-dist/css/bootstrap.css">
        <link rel="stylesheet" href="includes/style.css">
        <script type="text/javascript" href="includes/bootstrap-3.3.2-dist/js/bootstrap.js"></script>
    </head>
    <body>
        <?php
            include 'includes/db_connect.php';
            include 'includes/header.php';
            include 'includes/search.php';
        ?>
        <section class="container container-result">
            <section id="sorting-field" class="sorting off-screen">
                <span class="sorting-label">Sort by:</span>
                <div class="sorting-components">
                    <div class="sort-component">
                        <span class="sorting-label">Price</span>
                        <span class="up-down-buttons">
                            <button class="sorting-button up" onclick="sort('pris DESC')"><span class="glyphicon glyphicon-chevron-up"></span></button>
                            <button class="sorting-button down" onclick="sort('pris ASC')"><span class="glyphicon glyphicon-chevron-down"></span></button>
                        </span>
                    </div>
                    <div class="sort-component">
                        <span class="sorting-label">Avgift</span>
                        <span class="up-down-buttons">
                            <button class="sorting-button up" onclick="sort('avgift DESC')"><span class="glyphicon glyphicon-chevron-up"></span></button>
                            <button class="sorting-button down" onclick="sort('avgift ASC')"><span class="glyphicon glyphicon-chevron-down"></span></button>
                        </span>
                    </div>
                    <div class="sort-component">
                        <span class="sorting-label">Area</span>
                        <span class="up-down-buttons">
                            <button class="sorting-button up" onclick="sort('area DESC')"><span class="glyphicon glyphicon-chevron-up"></span></button>
                            <button class="sorting-button down" onclick="sort('area ASC')"><span class="glyphicon glyphicon-chevron-down"></span></button>
                        </span>
                    </div>
                    <div class="sort-component">
                        <span class="sorting-label">Rum</span>
                        <span class="up-down-buttons">
                            <button class="sorting-button up" onclick="sort('rum DESC')"><span class="glyphicon glyphicon-chevron-up"></span></button>
                            <button class="sorting-button down" onclick="sort('rum ASC')"><span class="glyphicon glyphicon-chevron-down"></span></button>
                        </span>
                    </div>
                </div>
            </section>
            <section id="result"></section>
        </section>
    <?php include 'includes/footer.php'?>
    </body>
</html>