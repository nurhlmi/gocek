<?php
	session_start();
	require_once 'detect.php';
	$detect = new Mobile_Detect;
	
	// Jika halaman desktop
	if (!$detect->isMobile() ) {
		include "error/notice.html";
	
	} else {
		if(isset($_SESSION['gocek'])) {
			include "home.php";
		
		} else {
			include "welcome.php";
		}
	}
?>