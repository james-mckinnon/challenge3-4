<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TweetBank</title>
	<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />
	<link type="text/css" rel="stylesheet" href="css/main.css" />
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<?php if($page == 'add'){ ?>
		<script type="text/javascript" src="js/add_func.js"></script>
	<?php }if($page == 'delete'){ ?>
		<script type="text/javascript" src="js/delete_func.js"></script>
	<?php }if($page == 'home'){ ?>
		<script type="text/javascript" src="js/fetch_tweets.js"></script>
	<?php } ?>
</head>
<body>
	<noscript>Your browser either does not support Javascript or Javascript is turned off</noscript>
	<div id="header">
		<h1>TweetBank</h1>
		<h2>...follow multiple Twitter trends, without needing an account</h2>
	</div>
	<div id="list_add">
		<p>
			<a href="add.php"><button class="btn">Add a List</button></a>&nbsp;&nbsp;&nbsp;
			<a href="delete.php"><button class="btn">Delete a List</button></a>&nbsp;&nbsp;&nbsp;
			<a href="index.php"><button class="btn">Display Lists</button></a>&nbsp;&nbsp;&nbsp;
			<a href=""><button class="btn btn-inverse">Config</button></a>
		</p>
	</div>