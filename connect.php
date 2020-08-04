<?php
	// $host	 = "sql200.epizy.com";
	// $username = "epiz_23722647";
	// $password = "GOCEK12";
    // $database = "epiz_23722647";
	
	$host	  = "localhost";
	$username = "root";
	$password = "";
    $database = "gocek";
	
	$con = mysqli_connect($host, $username, $password) or die ("Connection Failed!");
    mysqli_select_db($con, $database) or die ("Cannot select the Database!");
	
	//ini_set('max_execution_time', 300);
?>