<?php session_start(); ?>

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
		<form method="post" onkeyup="return Register()">
			<div class="container">
				<h4>Masukkan kata sandi baru</h4><br>
				
				<h6>Kata Sandi</h6>
				<i id="slash1" class="fa fa-fw fa-eye-slash silver pull-right" style="position:absolute;right:20px" onclick="return Open1()"></i>
				<input name="password" id="password" type="password" minlength="6" maxlength="18" required autofocus />
				
				<h6>Ulangi Kata Sandi</h6>
				<i id="slash2" class="fa fa-fw fa-eye-slash silver pull-right" style="position:absolute;right:20px" onclick="return Open2()"></i>
				<input name="rpassword" id="rpassword" type="password" minlength="6" maxlength="18" required />
				<span class="red" id="status"></span>
			</div>
			
			<button name="next" id="next1" class="btn-next bg-greenold">KONFIRMASI</button>
			<button id="next2" class="btn-next" disabled>KONFIRMASI</button>
		</form>
		
		<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
		<script type="text/javascript">
			function Register() {
				
				var pw = document.getElementById("password").value;
				var rpw = document.getElementById("rpassword").value;
				
				if(pw.length > 5 || rpw.length > 5) {
					if(pw.length < 19 || rpw.length < 19) {
						if(rpw) {
							if(pw == rpw) {
								$('#status').html("");
								document.getElementById("next1").style.display = "block";
								document.getElementById("next2").style.display = "none";
							} else {
								$('#status').html("Kata sandi tidak sama!");
								document.getElementById("next1").style.display = "none";
								document.getElementById("next2").style.display = "block";
							}
						} else {
							$('#status').html("");
							document.getElementById("next1").style.display = "none";
							document.getElementById("next2").style.display = "block";
						}
					} else {
						$('#status').html("Maksimal 18 karakter");
						document.getElementById("next1").style.display = "none";
						document.getElementById("next2").style.display = "block";
					}
				} else {
					$('#status').html("Minimal 6 karakter!");
					document.getElementById("next1").style.display = "none";
					document.getElementById("next2").style.display = "block";
				}
			}
			
			function Open1() {
				
				var slash = document.getElementById("slash1");
				var pw = document.getElementById("password");
				
				if(slash.className.match("fa-eye-slash")) {
					$("#slash1").removeClass("fa-eye-slash");
					$("#slash1").addClass("fa-eye");
					pw.type = "text";
				} else {
					$("#slash1").removeClass("fa-eye");
					$("#slash1").addClass("fa-eye-slash");
					pw.type = "password";
				}
			}
			
			function Open2() {
				
				var slash = document.getElementById("slash2");
				var rpw = document.getElementById("rpassword");
				
				if(slash.className.match("fa-eye-slash")) {
					$("#slash2").removeClass("fa-eye-slash");
					$("#slash2").addClass("fa-eye");
					rpw.type = "text";
				} else {
					$("#slash2").removeClass("fa-eye");
					$("#slash2").addClass("fa-eye-slash");
					rpw.type = "password";
				}
			}
		</script>
	</body>
</html>

<?php
	include "date.php";
	include "random.php";
	include "connect.php";
	
	if(isset($_POST['next'])) {
		
		$name = $_SESSION['name'];
		$email = $_SESSION['email'];
		$pw = $_POST['password'];
		$rpw = $_POST['rpassword'];
		
		$sql = "SELECT email FROM account";
		$query = mysqli_query($con,$sql);
		$data = mysqli_fetch_array($query);
		
		if($data['email'] != $email) {
		
			if($pw == $rpw) {
				
				$password = password_hash($pw, PASSWORD_DEFAULT);
				
				$sqi = "INSERT INTO account (name,email,password,gopay) 
				VALUES ('$name','$email','$password','50000')";
				$queri = mysqli_query($con,$sqi);
				
				$sqo = "SELECT id FROM account WHERE email = '$email' ";
				$quero = mysqli_query($con,$sqo);
				$data_id = mysqli_fetch_array($quero);
				
				$squ = "INSERT INTO inbox (uid,title,date,ket,price) 
				VALUES ('$data_id[id]','GO-PAY','$date','Bonus saldo bagi pengguna baru','50000')";
				$queru = mysqli_query($con,$squ);
				
				unset($_SESSION['name']);
				unset($_SESSION['email']);
				$_SESSION['gocek'] = $data_id['id'];
				echo "<script>location='./'</script>";
			
			} else {
				echo "<script>alert('Masukkan kata sandi dengan benar')</script>";
				return false;
			}
		} else {
			echo "<script>alert('Email telah digunakan!')</script>";
			return false;
		}
	}
?>