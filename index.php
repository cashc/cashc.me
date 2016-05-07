<?php
/**
 * Created by PhpStorm.
 * User: cash
 * Date: 5/7/16
 * Time: 11:18 AM
 */
// Start the session system
session_start();
$view =  New Cash\View("Cash $ Compton");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php echo $view->head(); ?>
</head>
<div class="intro">
 <p>Hey Cash!</p>
</div>
<body>
</body>
</html>