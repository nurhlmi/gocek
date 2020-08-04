<?php
	session_start();
	if(isset($_SESSION['name']) && isset($_SESSION['email'])) {
		$name = $_SESSION['name'];
		$email = $_SESSION['email'];
	} else {
		$name = "";
		$email = "";
	}
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
		</style>
	</head>
	
	<body class="bg-white">
		<div style="padding:20px">
			<i class="fa fa-fw fa-arrow-left fa-2x" onclick="return history.back()"></i>
			<i class="fa fa-fw fa-question-circle fa-2x pull-right"></i>
		</div>
		<form method="post" onkeyup="return Register()">
			<div class="container">
				<h4>Lengkapi data dirimu dibawah ini ya</h4><br>
				
				<h6>Nama Lengkap</h6>
				<input name="name" id="name" type="text" placeholder="Thanos Suparman" autocomplete="off" value="<?php echo $name; ?>"required autofocus />
				
				<h6>Email</h6>
				<input name="email" id="email" type="email" placeholder="thanos@gmail.com" autocomplete="off" value="<?php echo $email; ?>" required />
				<span class="red" id="status"></span>
			</div>
			
			<button name="next" id="next1" class="btn-next bg-greenold">SELANJUTNYA</button>
			<button id="next2" class="btn-next" disabled>SELANJUTNYA</button>
		</form>
		
		<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
		<script type="text/javascript">
			function Register() {
				
				var name = document.getElementById("name").value;
				var email = document.getElementById("email").value;
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				
				if(name) {
					if(email) {
						if(email.match(mailformat)) {
							$.ajax({
								type	: 'post',
								url		: 'process/register.php',
								data	: {email:email},
								success	: function(response) {
									
									if(response == 'OK') {
										$('#status').html("");
										document.getElementById("next1").style.display = "block";
										document.getElementById("next2").style.display = "none";
									} else {
										$('#status').html(response);
										document.getElementById("next1").style.display = "none";
										document.getElementById("next2").style.display = "block";
									}
								}
							});
						
						} else {
							$('#status').html("Masukkan email dengan benar!");
							document.getElementById("next1").style.display = "none";
							document.getElementById("next2").style.display = "block";
						}
					
					} else {
						$('#status').html("Masukkan email!");
						document.getElementById("next1").style.display = "none";
						document.getElementById("next2").style.display = "block";
					}
					
				} else {
					$('#status').html("Masukkan nama lengkap!");
					document.getElementById("next1").style.display = "none";
					document.getElementById("next2").style.display = "block";
				}
			}
		</script>
	</body>
</html>

<?php
	if(isset($_POST['next'])) {
		$_SESSION['name'] = $_POST['name'];
		$_SESSION['email'] = $_POST['email'];
		echo "<script>location='confirm.php'</script>";
	}
?>