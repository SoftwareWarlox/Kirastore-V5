<!- 16/04/2022/v4/caco ->

<!DOCTYPE html>

<html lang="en">

<head>
	<title>Shopping</title>
	<link rel="stylesheet" href="SS\default.css">
	<header>
		<button class="title" type="button" onclick="window.location.href = 'http://localhost:4000/index.php';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ShopSite</button>

		<form action="search.php" method="get">
			<div class="wrap">
   				<div class="search">
					<input type="text" class="searchTerm" placeholder="What are you looking for?" name="search">
					<button type="submit" class="searchButton"><i class="fa fa-search"></i></button>
				</div>
			</div>
		</form>

		<div class="header-icon">
			<img class="icon" src="IMG/GUI/CRT/cart.png" alt="cart" height="35" width="35">
			<img class="icon" src="IMG/GUI/WSH-LST/wishlist.png" alt="cart" height="35" width="35">
			<img class="icon" src="IMG/GUI/USR/user.png" alt="account" height="35" width="35">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</div>
	</header>
</head>
<body>
	<div class="page-flex-box">
	<div class="item-flex-box">
	<h1 class="section"> X results for <?php echo $_GET["search"]; ?></h1> 
	</div>
	</div>



</body>