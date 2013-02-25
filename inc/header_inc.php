<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TweetBank</title>
	<link type="text/css" rel="stylesheet" href="css/main.css" />
	<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />
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
	<div id="header">
		<h1>TweetBank</h1>
		<h2>...follow multiple Twitter trends, without needing an account</h2>
	</div>
	<div id="list_add">
		<p>
			<a href="add.php">[Add a List]+</a>&nbsp;&nbsp;&nbsp;
			<a href="delete.php">[Delete a List]-</a>&nbsp;&nbsp;&nbsp;
			<a href="index.php">[Display Lists]</a>
		</p>
	</div>