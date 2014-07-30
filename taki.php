<?php
	$user = $_POST['username'] ;
	$pass = $_POST['pss'] ;
	echo "SELECT * FROM users WHERE username='$user' AND pssword='$pass' " ;
?>
