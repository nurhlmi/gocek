<?php
	include "../connect.php";

	if(isset($_POST['email'])) {
		
		$email = $_POST['email'];
	
		$sql = "SELECT email FROM account WHERE email = '$email'";
		$query = mysqli_query($con,$sql);
	
		if(mysqli_num_rows($query) > 0) {
			echo "Email telah digunakan!";
		} else {
			echo "OK";
		}
		exit();
	}
?>