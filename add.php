<?php $page = 'add'; include('inc/header_inc.php'); ?>

	<form>
		<p id="success"></p>
		<input type="text" name="term" placeholder="Search Term" required="required">
		<input type="submit" value="Save" id="savebutton">
	</form>

<?php include('inc/footer_inc.php'); ?>