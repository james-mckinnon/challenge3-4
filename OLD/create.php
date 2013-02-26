<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Create</title>
</head>
<body>
	<p>This page is a development page to create a localStorage object incase it is accidentally deleted or fucked up</p>

	<script>
		var termsKey = [];
			termsKey[0] = 'Banana';
			termsKey[1] = 'Orange';
			termsKey[2] = 'Apple';
		localStorage.setItem('termsKey', JSON.stringify(termsKey));
	</script>
</body>
</html>