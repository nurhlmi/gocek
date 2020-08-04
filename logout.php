<?php
	session_start();
	unset($_SESSION['gocek']);
	session_destroy();
	
	echo "<script>location='./'</script>";
?>