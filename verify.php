<?php
	session_start();
?>

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
			#reset{display:none;}
		</style>
		
		<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
	</head>
	
	<body class="bg-white">
		<div style="padding:20px">
			<i class="fa fa-fw fa-arrow-left fa-2x" onclick="return history.back()"></i>
			<i class="fa fa-fw fa-question-circle fa-2x pull-right"></i>
		</div>
		<form method="post" role="form" onkeyup="return nextButton()">
			<div class="container">
				<h4>Selangkah lagi!</h4><br>
				<span>
					Kamu tinggal memasukkan kode verifikasi yang telah kami kirim via email ke 
					<b><?php echo $_SESSION['verify']; ?></b>.
				</span><br><br>
				<div class="row">
					<div class="col-xs-6">
						<input class="input-verify pull-left" id="v1" name="v1" type="tel" maxLength="1" autocomplete="off" placeholder="●" autofocus required>
						<input class="input-verify pull-left" id="v2" name="v2" type="tel" maxLength="1" autocomplete="off" placeholder="●" autofocus required>
						<input class="input-verify pull-left" id="v3" name="v3" type="tel" maxLength="1" autocomplete="off" placeholder="●" autofocus required>
						<input class="input-verify pull-left" id="v4" name="v4" type="tel" maxLength="1" autocomplete="off" placeholder="●" autofocus required>
					</div>
					<div class="col-xs-6">
						<input class="input-reset pull-left bg-silver" id="reset" type="reset" value="ULANG" onclick="return resetButton()">
					</div>
				</div>
			</div>
			<button name="next" id="next1" class="btn-next bg-greenold">KONFIRMASI</button>
		</form>
		<button id="next2" class="btn-next" disabled>KONFIRMASI</button>
		
		<script lang="javascript">
			$(".input-verify").keyup(function () {
				if (this.value.length == this.maxLength) {
					$(this).next('.input-verify').focus();
				} else {
					$(this).blur();
				}
			});
			
			function nextButton() {
				
				var a = document.getElementById("v1").value;
				var b = document.getElementById("v2").value;
				var c = document.getElementById("v3").value;
				var d = document.getElementById("v4").value;
				
				if(a!="" && b!="" && c!="" && d!="") {
					document.getElementById("next1").style.display = "block";
					document.getElementById("next2").style.display = "none";
					document.getElementById("reset").style.display = "block";
				} else {
					document.getElementById("next1").style.display = "none";
					document.getElementById("next2").style.display = "block";
				}
			}
			
			function resetButton() {
				document.getElementById("next1").style.display = "none";
				document.getElementById("next2").style.display = "block";
				document.getElementById("reset").style.display = "none";
			}
		</script>
	</body>
</html>

<?php
	include "date.php";
	include "connect.php";
	
	if(isset($_POST['next'])) {
		
		$verify = $_POST['v1'].$_POST['v2'].$_POST['v3'].$_POST['v4'];
		
		if($_SESSION['verify'] == $verify) {
			
			$sql = "INSERT INTO account (name,email,phone,gopay) 
			VALUES ('$_SESSION[name]','$_SESSION[email]','$_SESSION[hp]','50000')";
			$query = mysqli_query($con,$sql);
			
			$squ = "INSERT INTO inbox (email,title,date,ket,price) 
			VALUES ('$_SESSION[email]','GO-PAY','$date','Bonus saldo bagi pengguna baru','50000')";
			$queru = mysqli_query($con,$squ);
			
			$_SESSION['gocek'] = $_SESSION['email'];
			echo "<script>location='./'</script>";
		
		} else {
			echo "<script>alert('Kode verifikasi salah!');</script>";
			return false;
		}
	}
?>