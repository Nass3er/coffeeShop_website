
<?php
 
session_start();
require_once('DB/database.php');
// $search=$_GET['search'] ?? '';
 
$result=mysqli_query($conn,'SELECT * fROM products');
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopify Product Page Layout</title>
    <link rel="stylesheet" href="css/style.css">
      
</head>

<?php include_once('includes/header.php'); ?>

<body>

    <!-- Main Section -->
    <main class="product_page">
        <!-- Left Section -->
        <aside class="main__categories">
            <table class="w3-table w3-striped" id="tableproducts">
                <tr>
                  <th >First Name</th>
                  <th>price</th>
                </tr>

                <tfoot>
                  <tr>
                    <td>total price</td>
                    <td id="totalprice">0</td>
                  </tr>
                </tfoot>
              </table>
            <hr>
        </aside>
        <!-- Products Section -->
        <div class="main__products-content">
            <!-- Product Category 1 -->
            <section class="main__products">
                <h2><span>Light</span> Roast</h2>
                <div class="main__products-box">
                </div>
            </section>
        </div>
    </main>
    
    <?php include_once('includes/footer.php'); ?>
</body>

</html>