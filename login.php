<!Doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-wdith, initial-scale=1.0, user-scalable=0" />
		
		<title>GO-CEK</title>
		
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link rel="shorcut icon" href="img/icon.ico">
		<link href="style.css" rel="stylesheet">
		<style>
			#next1{display:none;}
		</style>
	</head>
	
	<body class="bg-white">
		<div style="padding:20px">
			<i class="fa fa-fw fa-arrow-left fa-2x" onclick="return history.back()"></i>
			<i class="fa fa-fw fa-question-circle fa-2x pull-right"></i>
		</div>
		<form method="post" onsubmit="return Submit()">
			<div class="container" onkeyup="return Login()">
				<h4>Masuk</h4><br>
				
				<h6>Email</h6>
				<input name="email" id="email" autocomplete="off" required />
				
				<h6>Kata Sandi</h6>
				<i id="slash" class="fa fa-fw fa-eye-slash silver pull-right" style="position:absolute;right:20px" onclick="return Open()"></i>
				<input name="password" id="password" type="password" required />
				<span class="red" id="status"></span>
			</div>
			
			<button name="next" id="next1" class="btn-next bg-greenold">MASUK</button>
			<button id="next2" class="btn-next" disabled>MASUK</button>
		</form>
		
		<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
		<script type="text/javascript">
			function Login() {
				
				var email = document.getElementById("email").value;
				var pass = document.getElementById("password").value;
				
				if(email!="" && pass!="") {
					document.getElementById("next1").style.display = "block";
					document.getElementById("next2").style.display = "none";
				} else {
					document.getElementById("next1").style.display = "none";
					document.getElementById("next2").style.display = "block";
				}
			}
			
			function Submit() {
				
				var email = document.getElementById("email").value;
				var pass = document.getElementById("password").value;
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				
				if(email.match(mailformat)) {
					if(pass) {
						if(pass.length > 5) {
							if(pass.length < 19) {
								$('#status').html("");
								document.getElementById("next1").style.display = "block";
								document.getElementById("next2").style.display = "none";
								return true;
							} else {
								$('#status').html("Kata sandi maksimal 18 karakter");
								document.getElementById("next1").style.display = "none";
								document.getElementById("next2").style.display = "block";
								return false;
							}
						} else {
							$('#status').html("Kata sandi minimal 6 karakter");
							document.getElementById("next1").style.display = "none";
							document.getElementById("next2").style.display = "block";
							return false;
						}
					} else {
						$('#status').html("Masukkan kata sandi!");
						document.getElementById("next1").style.display = "none";
						document.getElementById("next2").style.display = "block";
						return false;
					}
				
				} else {
					$('#status').html("Masukkan email dengan benar!");
					document.getElementById("next1").style.display = "none";
					document.getElementById("next2").style.display = "block";
					return false;
				}
			}
			
			function Open() {
				
				var slash = document.getElementById("slash");
				var pw = document.getElementById("password");
				
				if(slash.className.match("fa-eye-slash")) {
					$("#slash").removeClass("fa-eye-slash");
					$("#slash").addClass("fa-eye");
					pw.type = "text";
				} else {
					$("#slash").removeClass("fa-eye");
					$("#slash").addClass("fa-eye-slash");
					pw.type = "password";
				}
			}
		</script>
	</body>
</html>

<?php
	include "connect.php";
	
	if(isset($_POST['next'])) {
		
		$email = $_POST['email'];
		$pass = $_POST['password'];
		
		$sql = "SELECT * FROM account WHERE email = '$email' ";
		$query = mysqli_query($con,$sql);
		$rows = mysqli_num_rows($query);
		$data = mysqli_fetch_array($query);
		
		if($rows != 0) {
			
			if(password_verify($pass, $data['password'])) {
				
				session_start();
				unset($_SESSION['name']);
				unset($_SESSION['email']);
				$_SESSION['gocek'] = $data['id'];
				echo "<script>location='./'</script>";
			
			} else {
				echo "<script>alert('Kata sandi salah!')</script>";
				echo "<script>document.getElementById('email').value = '$email';</script>";
				return false;
			}
		} else {
			echo "<script>alert('Akun tidak ditemukan!')</script>";
			return false;
		}
	}
?>