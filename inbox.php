<?php
	session_start();
	include "connect.php";
	
	$sql = "SELECT * FROM inbox WHERE uid = '$_SESSION[gocek]' ORDER by id DESC";
	$query = mysqli_query($con,$sql);
	$rows = mysqli_num_rows($query);
?>

<!Doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="veiwport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
		
		<title>GO-CEK</title>
		
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link rel="shorcut icon" href="img/icon.ico">
		<link href="style.css" rel="stylesheet">
	</head>
	
	<body style="margin-top:150px;margin-bottom:170px">
		<div class="form-head">
			<h1>Pesan</h1>
		</div>
		
		<?php if($rows < 1) { ?>
		<div class="container">
			<div class="text-center" style="margin-top:25vh">
				<div class="row">
					<div class="col-xs-4 col-xs-offset-4">
						<img src="img/icons/mail.png" style="margin-bottom:20px">
					</div>
				</div>
				<h1>Kosong</h1>
				<h2 class="silver">Semua pesan akan muncul disini.</h2>
			</div>
		</div>
		<?php } else {while($inbox = mysqli_fetch_array($query)) { ?>
		<div class="list-ticket">
			<div class="row">
				<div class="col-xs-2 text-center">
					<h2><i class="fa fa-fw fa-credit-card fa-2x"></i></h2>
				</div>
				<div class="col-xs-10">
					<h1><?php echo $inbox['title']; ?></h1>
					<h2 class="silver">
						<?php echo $inbox['ket']; ?>
						<span class="green">Rp<?php echo number_format($inbox['price'],0,',','.'); ?></span>
					</h2><br>
					<h3 class="silver"><?php echo $inbox['date']; ?></h3>
				</div>
			</div>
		</div>
		<?php }} ?>
		
		<div class="bars">
			<div class="row">
				<div class="col-xs-3 bars-menu silver" onclick="return location='./'">
					<span class="glyphicon glyphicon-home gi-4x"></span>
					<h2>Beranda</h2>
				</div>
				<div class="col-xs-3 bars-menu silver" onclick="return location='ticket'">
					<i class="fa fa-fw fa-ticket fa-4x"></i>
					<h2>Tiket</h2>
				</div>
				<div class="col-xs-3 green">
					<i class="fa fa-fw fa-envelope fa-4x"></i>
					<h2>Pesan</h2>
				</div>
				<div class="col-xs-3 bars-menu silver" onclick="return location='account'">
					<i class="fa fa-fw fa-user fa-4x"></i>
					<h2>Akun</h2>
				</div>
			</div>
		</div>
	</body>
</html>