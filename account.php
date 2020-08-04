<?php
	session_start();
	include "connect.php";
	
	$sql = "SELECT * FROM account WHERE id = '$_SESSION[gocek]' ";
	$query = mysqli_query($con,$sql);
	$account = mysqli_fetch_array($query);
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
	
	<body style="margin-top:150px">
		<div class="form-head">
			<h1>Akun</h1>
		</div>
		<div class="form-list">
			<h1 class="green pull-right">UBAH</h1>
			<h1><?php echo $account['name']; ?></h1>
			<span class="text"><?php echo $account['email']; ?></span><br>
		</div>
		<div class="form-list">
			<div class="row" style="margin-bottom:40px">
				<div class="col-xs-2">
					<i class="fa fa-fw fa-tag fa-4x pull-center silver" style="transform:rotate(45deg)"></i>
				</div>
				<div class="col-xs-10" style="border-bottom:1px solid silver;padding-bottom:30px;padding-top:5px">
					<span class="text">Masukkan kode promo</span>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-2">
					<i class="fa fa-fw fa-ticket fa-4x pull-center silver" style="transform:rotate(-45deg)"></i>
				</div>
				<div class="col-xs-10" style="padding-top:5px">
					<span class="text">Voucher Saya</span>
				</div>
			</div>
		</div>
		<div class="form-list">
			<div class="row" style="margin-bottom:40px">
				<div class="col-xs-2">
					<i class="fa fa-fw fa-question-circle-o fa-4x silver pull-center"></i>
				</div>
				<div class="col-xs-10" style="border-bottom:1px solid silver;padding-bottom:30px;padding-top:5px">
					<span class="text">Bantuan</span>
				</div>
			</div>
			<div class="row" style="margin-bottom:40px">
				<div class="col-xs-2">
					<i class="fa fa-fw fa-list-alt fa-4x pull-center silver"></i>
				</div>
				<div class="col-xs-10" style="border-bottom:1px solid silver;padding-bottom:30px;padding-top:5px">
					<span class="text">Ketentuan Layanan</span>
				</div>
			</div>
			<div class="row" style="margin-bottom:40px">
				<div class="col-xs-2">
					<i class="fa fa-fw fa-shield fa-4x pull-center silver"></i>
				</div>
				<div class="col-xs-10" style="border-bottom:1px solid silver;padding-bottom:30px;padding-top:5px">
					<span class="text">Kebijakan Privasi</span>
				</div>
			</div>
			<div class="row">	
				<div class="col-xs-2">
					<i class="fa fa-fw fa-star-o fa-4x pull-center silver"></i>
				</div>
				<div class="col-xs-10" style="padding-top:5px">
					<span class="text">Beri kami nilai</span>
					<small class="pull-right">v3.16.1</small>
				</div>
			</div>
		</div>
		<div class="form-list">
			<div class="row" onclick="return location='logout.php'">
				<div class="col-xs-2 col-xs-offset-5">
					<h1 class="red">Keluar</span>
				</div>
			</div>
		</div>
		
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
				<div class="col-xs-3 bars-menu silver" onclick="return location='inbox'">
					<i class="fa fa-fw fa-envelope fa-4x"></i>
					<h2>Pesan</h2>
				</div>
				<div class="col-xs-3 green">
					<i class="fa fa-fw fa-user fa-4x"></i>
					<h2>Akun</h2>
				</div>
			</div>
		</div>
	</body>
</html>