<?php

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
		
		<meta name="Description" content="@ArtTerror23" />
		<!-- theme-color defines the top bar color (blue in my case)-->
		<meta name="theme-color" content="#414f57" />
		
		<!-- Add to home screen for Safari on iOS-->
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="default" />
		<meta name="apple-mobile-web-app-title" content="GOCEK" />
		<link rel="apple-touch-icon" href="img/resolution/128.png" />
		
		<!-- Add to home screen for Windows-->
		<meta name="msapplication-TileImage" content="img/resolution/128.png" />
		<meta name="msapplication-TileColor" content="#000000" />
		
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		
		<script type="text/javascript" src="jquery/jquery.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
		
		<link rel="shorcut icon" href="img/icon.ico">
		<link href="style.css" rel="stylesheet">
		
		<style>
			#commuter-checkout {display: none;}
			#commuterButton2 {display: none;}
			
			#transj-checkout {display: none;}
			#transjButton2 {display: none;}
			
			#mrtj-checkout {display: none;}
			#mrtjButton2 {display: none;}
			
			#lrtj-checkout {display: none;}
			#lrtjButton2 {display: none;}
		</style>
	</head>
	
	<body>
		<div class="form-head">
			<div class="row">
				<div class="col-xs-12">
					<img src="img/logo.png" class="logo" onclick="return javascript:" id="logo-to-top">
					<div class="pull-right" style="margin-top:20px;margin-right:30px" onclick="return location='gopoints'">
						<i class="fa fa-question-circle fa-5x greenold"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="form" style="margin-top:120px">
			<div class="pay">
				<div class="payhead">
					<div class="row">
						<div class="col-xs-12">
							<h1 class="pull-left">GO <i class="fa fa-fw fa-credit-card"></i> PAY</h1>
							<h1 class="pull-right"><?php echo "Rp".number_format($account['gopay'],0,',','.'); ?></h1>
							<input type="hidden" id="gopay" value="<?php echo $account['gopay']; ?>">
						</div>
					</div>
				</div>
				<div class="paybody">
					<div class="row">
						<div class="col-xs-3 paymenu">
							<i class="fa fa-fw fa-arrow-up fa-5x"></i>
							<h2>Bayar</h2>
						</div>
						<div class="col-xs-3 paymenu">
							<i class="fa fa-fw fa-map-marker fa-5x"></i>
							<h2>Nearby</h2>
						</div>
						<div class="col-xs-3 paymenu">
							<i class="fa fa-fw fa-plus fa-5x"></i>
							<h2>Isi Saldo</h2>
						</div>
						<div class="col-xs-3 paymenu" data-toggle="modal" data-target="#lainnya">
							<i class="fa fa-fw fa-bars fa-5x"></i>
							<h2>Lainnya</h2>
						</div>
					</div>
				</div>
			</div>
			
			<div id="menu">
				<div class="row">
					<div class="col-xs-3 menu">
						<div class="list" data-toggle="modal" data-target="#go-commuter">
							<img src="img/logo/commuter.png">
						</div>
						<h1 class="text-menu">GO-Commuter</h1>
					</div>
					<div class="col-xs-3 menu">
						<div class="list" data-toggle="modal" data-target="#go-transj">
							<img src="img/logo/transj.png">
						</div>
						<h1 class="text-menu">GO-Transj</h1>
					</div>
					<div class="col-xs-3 menu">
						<div class="list" data-toggle="modal" data-target="#go-mrtj">
							<img src="img/logo/mrtj.png">
						</div>
						<h1 class="text-menu">GO-MRTJ</h1>
					</div>
					<div class="col-xs-3 menu">
						<div class="list" data-toggle="modal" data-target="#go-lrtj">
							<img src="img/logo/lrtj.png">
						</div>
						<h1 class="text-menu">GO-LRTJ</h1>
					</div>
				</div>
			</div>
		</div>
		
		<div class="form" style="padding-top:0;padding-bottom:0">
			<div class="news">
				<div class="row">
					<div class="col-xs-12">
						<img src="img/banner/cobamrtj.png" class="produk">
					</div>
					<div class="col-xs-10">
						<h1>GO-MRTJ</h1>
						<span class="text">
							Bagi masyarakat yang ingin menikmati layanan MRT Jakarta,
							dapat melakukan pendaftaran online di www.ayocobamrtj.com
							atau di aplikasi GO-CEK.
						</span><br>
					</div>
					<div class="col-xs-5 col-xs-offset-7">
						<button class="btn-click bg-green pull-right">
							<h1>Pesan Sekarang<h1>
						</button>
					</div>
				</div>
			</div>
			<!--
			<div class="news">
				<h1>GO<i class="fa fa-fw fa-cutlery red"></i>FOOD
				<h1>Jajanan Paling Hits</h1><br>
				
				<div class="row">
					<div class="col-xs-6">
						<img src="img/makaroni.jpg" class="produk">
						<h1>Makaroni Ngehe</h1>
					</div>
					<div class="col-xs-6">
						<img src="img/martabak.jpg" class="produk">
						<h1>Martabak Orins</h1>
					</div>
				</div>
			</div>
			-->
		</div>
		
		<div class="bars">
			<div class="row">
				<div class="col-xs-3 green" onclick="return javascript:" id="menu-to-top">
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
				<div class="col-xs-3 bars-menu silver" onclick="return location='account'">
					<i class="fa fa-fw fa-user fa-4x"></i>
					<h2>Akun</h2>
				</div>
			</div>
		</div>
		
		<!--COMMUTER-->
		<div class="modal fade" id="go-commuter" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog full" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<img class="company" src="img/logo/commuterline.png">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-xs-2 text-center">
									<div style="margin-top:40px">
										<i class="fa fa-fw fa-subway red"></i>
									</div>
								</div>
								<div class="col-xs-10">
									<span class="title">Dari Stasiun</span>
									<select id="commuterFrom" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="BGR">Bogor</option>
										<option value="DP">Depok</option>
										<option value="MRI">Manggarai</option>
										<option value="JNG">Jatinegara</option>
										<option value="DU">Duri</option>
										<option value="AK">Angke</option>
										<option value="BKS">Bekasi</option>
										<option value="JAKK">Jakarta Kota</option>
									</select>
								</div>
								
								<div class="col-xs-2 text-center" style="padding-top:10px">
									<i class="fa fa-fw fa-ellipsis-v silver"></i>
									<i class="fa fa-map-marker yellow"></i>
								</div>
								
								<div class="col-xs-10" style="padding-top:80px">
									<span class="title">Ke Stasiun</span>
									<select id="commuterTo" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="BGR">Bogor</option>
										<option value="DP">Depok</option>
										<option value="MRI">Manggarai</option>
										<option value="DU">Duri</option>
										<option value="AK">Angke</option>
										<option value="BKS">Bekasi</option>
										<option value="JNG">Jatinegara</option>
										<option value="JAKK">Jakarta Kota</option>
									</select>
								</div>
							</div>
							<div class="container-fluid"><hr>
								<div class="checkout" id="commuter-checkout">
									<div class="row">
										<div class="col-xs-12">
											<h2 class="pull-left">Pembayaran
												<span class="greenold">GO <i class="fa fa-fw fa-credit-card"></i> PAY</span>
											</h2>
											<h1 class="pull-right green" id="commuterPriceInput"></h1>
										</div>
									</div>
									<span class="text-notice" id="commuter-gopay"></span>
									
									<div class="row">
										<div class="col-xs-3">
											<button class="btn-click btn-modal bg-red" onclick="return commuterCancel()">
												<i class="fa fa-arrow-left"></i>
											</button>
										</div>
										<div class="col-xs-9">
											<form method="post">
												<input type="hidden" name="from" id="commuterFromInput">
												<input type="hidden" name="to" id="commuterToInput">
												<input type="hidden" name="price" id="commuterPrice">
												<button name="commuterButton" id="commuterButton1" class="btn-click btn-modal bg-greenold">Pesan GO-COMMUTER</button>
											</form>
											<button name="commuterButton" id="commuterButton2" class="btn-click btn-modal bg-silver">Pesan GO-COMMUTER</button>
										</div>
									</div>
								</div>
								<div id="commuter-confirm">
									<span class="text-notice" id="commuter-notice"></span>
									<button class="btn-click btn-modal bg-greenold" onclick="return commuterConfirm()">Oke</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--TRANSJ-->
		<div class="modal fade" id="go-transj" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog full" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<img class="company" src="img/logo/transjakarta.png">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-xs-2 text-center">
									<div style="margin-top:40px">
										<i class="fa fa-fw fa-subway blue"></i>
									</div>
								</div>
								<div class="col-xs-10">
									<span class="title">Dari Halte</span>
									<select id="transjFrom" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="K1.01">Blok M</option>
										<option value="K1.02">Masjid Agung</option>
										<option value="K1.03">Bundaran Senayan</option>
										<option value="K1.04">Gelora Bung Karno</option>
										<option value="K1.05">Polda Metro Jaya</option>
										<option value="K1.06">Bendungan Hilir</option>
										<option value="K1.07">Karet Sudirman</option>
										<option value="K1.09">Dukuh Atas 1</option>
										<option value="K1.10">Tosari</option>
										<option value="K1.12">Sarinah</option>
										<option value="K1.13">Bank Indonesia</option>
										<option value="K1.14">Monas</option>
										<option value="K1.15">Harmoni Central</option>
										<option value="K1.16">Sawah Besar</option>
										<option value="K1.17">Mangga Besar</option>
										<option value="K1.18">Olimo</option>
										<option value="K1.19">Glodok</option>
										<option value="K1.20">Kota</option>
									</select>
								</div>
								
								<div class="col-xs-2 text-center" style="padding-top:10px">
									<i class="fa fa-fw fa-ellipsis-v silver"></i>
									<i class="fa fa-map-marker yellow"></i>
								</div>
								
								<div class="col-xs-10" style="padding-top:80px">
									<span class="title">Ke Halte</span>
									<select id="transjTo" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="K1.01">Blok M</option>
										<option value="K1.02">Masjid Agung</option>
										<option value="K1.03">Bundaran Senayan</option>
										<option value="K1.04">Gelora Bung Karno</option>
										<option value="K1.05">Polda Metro Jaya</option>
										<option value="K1.06">Bendungan Hilir</option>
										<option value="K1.07">Karet Sudirman</option>
										<option value="K1.09">Dukuh Atas 1</option>
										<option value="K1.10">Tosari</option>
										<option value="K1.12">Sarinah</option>
										<option value="K1.13">Bank Indonesia</option>
										<option value="K1.14">Monas</option>
										<option value="K1.15">Harmoni Central</option>
										<option value="K1.16">Sawah Besar</option>
										<option value="K1.17">Mangga Besar</option>
										<option value="K1.18">Olimo</option>
										<option value="K1.19">Glodok</option>
										<option value="K1.20">Kota</option>
									</select>
								</div>
							</div>
							<div class="container-fluid"><hr>
								<div class="checkout" id="transj-checkout">
									<div class="row">
										<div class="col-xs-12">
											<h2 class="pull-left">Pembayaran
												<span class="greenold">GO <i class="fa fa-fw fa-credit-card"></i> PAY</span>
											</h2>
											<h1 class="pull-right green" id="transjPriceInput"></h1>
										</div>
									</div>
									<span class="text-notice" id="transj-gopay"></span>
									
									<div class="row">
										<div class="col-xs-3">
											<button class="btn-click btn-modal bg-red" onclick="return transjCancel()">
												<i class="fa fa-arrow-left"></i>
											</button>
										</div>
										<div class="col-xs-9">
											<form method="post">
												<input type="hidden" name="from" id="transjFromInput">
												<input type="hidden" name="to" id="transjToInput">
												<input type="hidden" name="price" id="transjPrice">
												<button name="transjButton" id="transjButton1" class="btn-click btn-modal bg-greenold">
													Pesan GO-TRANSJ
												</button>
											</form>
											<button id="transjButton2" class="btn-click btn-modal bg-silver">Pesan GO-TRANSJ</button>
										</div>
									</div>
								</div>
								<div id="transj-confirm">
									<span class="text-notice" id="transj-notice"></span>
									<button class="btn-click btn-modal bg-greenold" onclick="return transjConfirm()">Oke</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--MRTJ-->
		<div class="modal fade" id="go-mrtj" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog full" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<img class="company" src="img/logo/mrtjakarta.png">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-xs-2 text-center">
									<div style="margin-top:40px">
										<i class="fa fa-fw fa-subway blueold"></i>
									</div>
								</div>
								<div class="col-xs-10">
									<span class="title">Dari Stasiun</span>
									<select id="mrtjFrom" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="BHI">Bundaran HI</option>
										<option value="DKA">Dukuh Atas</option>
										<option value="STB">Setiabudi</option>
										<option value="BNH">Bendungan Hilir</option>
										<option value="IST">Istora</option>
										<option value="SNY">Senayan</option>
										<option value="SSM">ASEAN</option>
										<option value="BLM">Blok M</option>
										<option value="BLA">Blok A</option>
										<option value="HJN">Haji Nawi</option>
										<option value="CPR">Cipete Raya</option>
										<option value="FTM">Fatmawati</option>
										<option value="LBB">Lebak Bulus</option>
									</select>
								</div>
								
								<div class="col-xs-2 text-center" style="padding-top:10px">
									<i class="fa fa-fw fa-ellipsis-v silver"></i>
									<i class="fa fa-map-marker yellow"></i>
								</div>
								
								<div class="col-xs-10" style="padding-top:80px">
									<span class="title">Ke Stasiun</span>
									<select id="mrtjTo" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="BHI">Bundaran HI</option>
										<option value="DKA">Dukuh Atas</option>
										<option value="STB">Setiabudi</option>
										<option value="BNH">Bendungan Hilir</option>
										<option value="IST">Istora</option>
										<option value="SNY">Senayan</option>
										<option value="SSM">ASEAN</option>
										<option value="BLM">Blok M</option>
										<option value="BLA">Blok A</option>
										<option value="HJN">Haji Nawi</option>
										<option value="CPR">Cipete Raya</option>
										<option value="FTM">Fatmawati</option>
										<option value="LBB">Lebak Bulus</option>
									</select>
								</div>
							</div>
							<div class="container-fluid"><hr>
								<div class="checkout" id="mrtj-checkout">
									<div class="row">
										<div class="col-xs-12">
											<h2 class="pull-left">Pembayaran
												<span class="greenold">GO <i class="fa fa-fw fa-credit-card"></i> PAY</span>
											</h2>
											<h1 class="pull-right green" id="mrtjPriceInput"></h1>
										</div>
									</div>
									<span class="text-notice" id="mrtj-gopay"></span>
									
									<div class="row">
										<div class="col-xs-3">
											<button class="btn-click btn-modal bg-red" onclick="return mrtjCancel()">
												<i class="fa fa-arrow-left"></i>
											</button>
										</div>
										<div class="col-xs-9">
											<form method="post">
												<input type="hidden" name="from" id="mrtjFromInput">
												<input type="hidden" name="to" id="mrtjToInput">
												<input type="hidden" name="price" id="mrtjPrice">
												<button name="mrtjButton" id="mrtjButton1" class="btn-click btn-modal bg-greenold">
													Pesan GO-MRTJ
												</button>
											</form>
											<button id="mrtjButton2" class="btn-click btn-modal bg-silver">Pesan GO-MRTJ</button>
										</div>
									</div>
								</div>
								<div id="mrtj-confirm">
									<span class="text-notice" id="mrtj-notice"></span>
									<button class="btn-click btn-modal bg-greenold" onclick="return mrtjConfirm()">Oke</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--LRTJ-->
		<div class="modal fade" id="go-lrtj" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog full" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<img class="company" src="img/logo/lrtjakarta.png">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-xs-2 text-center">
									<div style="margin-top:40px">
										<i class="fa fa-fw fa-subway red"></i>
									</div>
								</div>
								<div class="col-xs-10">
									<span class="title">Dari Stasiun</span>
									<select id="lrtjFrom" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="S-02">Boulevard Utara</option>
										<option value="S-03">Boulevard Selatan</option>
										<option value="S-04">Pulomas</option>
										<option value="S-05">Equestrian</option>
										<option value="S-06">Velodrome</option>
									</select>
								</div>
								
								<div class="col-xs-2 text-center" style="padding-top:10px">
									<i class="fa fa-fw fa-ellipsis-v silver"></i>
									<i class="fa fa-map-marker yellow"></i>
								</div>
								
								<div class="col-xs-10" style="padding-top:80px">
									<span class="title">Ke Stasiun</span>
									<select id="lrtjTo" class="pull-left">
										<option value="" disabled selected>Pilih</option>
										<option value="S-02">Boulevard Utara</option>
										<option value="S-03">Boulevard Selatan</option>
										<option value="S-04">Pulomas</option>
										<option value="S-05">Equestrian</option>
										<option value="S-06">Velodrome</option>
									</select>
								</div>
							</div>
							<div class="container-fluid"><hr>
								<div class="checkout" id="lrtj-checkout">
									<div class="row">
										<div class="col-xs-12">
											<h2 class="pull-left">Pembayaran
												<span class="greenold">GO <i class="fa fa-fw fa-credit-card"></i> PAY</span>
											</h2>
											<h1 class="pull-right green" id="lrtjPriceInput"></h1>
										</div>
									</div>
									<span class="text-notice" id="lrtj-gopay"></span>
									
									<div class="row">
										<div class="col-xs-3">
											<button class="btn-click btn-modal bg-red" onclick="return lrtjCancel()">
												<i class="fa fa-arrow-left"></i>
											</button>
										</div>
										<div class="col-xs-9">
											<form method="post">
												<input type="hidden" name="from" id="lrtjFromInput">
												<input type="hidden" name="to" id="lrtjToInput">
												<input type="hidden" name="price" id="lrtjPrice">
												<button name="lrtjButton" id="lrtjButton1" class="btn-click btn-modal bg-greenold">
													Pesan GO-LRTJ
												</button>
											</form>
											<button id="lrtjButton2" class="btn-click btn-modal bg-silver">Pesan GO-LRTJ</button>
										</div>
									</div>
								</div>
								<div id="lrtj-confirm">
									<span class="text-notice" id="lrtj-notice"></span>
									<button class="btn-click btn-modal bg-greenold" onclick="return lrtjConfirm()">Oke</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="lainnya" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog half" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="pull-left">GO <i class="fa fa-fw fa-credit-card"></i> PAY</h1>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="row text-center">
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-arrow-down green"></i>
								<h2>Minta</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-refresh green"></i>
								<h2>Riwayat</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-arrow-circle-down green"></i>
								<h2>Tarik</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-ticket green" style="transform:rotate(45deg)"></i>
								<h2>Voucher</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-file-text green"></i>
								<h2>Tagihan</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-tablet green"></i>
								<h2>Pulsa</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-gear green"></i>
								<h2>Pengaturan</h2>
							</div>
							<div class="col-xs-3 paymore">
								<i class="fa fa-fw fa-question-circle green"></i>
								<h2>Bantuan</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<script type="text/javascript" src="jquery/top.js"></script>
		<script type="text/javascript" src="js/commuter.js"></script>
		<script type="text/javascript" src="js/transj.js"></script>
		<script type="text/javascript" src="js/mrtj.js"></script>
		<script type="text/javascript" src="js/lrtj.js"></script>
		
	</body>
</html>

<?php
	include "date.php";
	include "connect.php";
	include "qrcode/qrlib.php";
	
	if(isset($_POST['commuterButton'])) {
		
		if($account['gopay'] >= $_POST['price']) {
			
			$uid = $account['id'];
			$oid = "CL".$uid.strtotime('now');
			$type = "commuter";
			$dari = $_POST["from"];
			$ke = $_POST["to"];
			$price = $_POST["price"];
			$total = $account['gopay'] - $price;
			QRcode::png("http://localhost/desainerweb.id/app/gocek/tap?order=$oid", "img/order/$oid.png", 10, 10);
			
			$sql = "INSERT INTO ticket (uid,oid,type,dari,ke,price,date,time,status) 
			VALUES ('$uid','$oid','$type','$dari','$ke','$price','$date','$time','Y')";
			$query = mysqli_query($con,$sql);
			
			$squ = "UPDATE account SET gopay='$total' WHERE id='$_SESSION[gocek]' ";
			$queru = mysqli_query($con,$squ);
			
			echo "<script>location='ticket'</script>";
			
		} else {
			
			echo "<script>alert('Saldo GO-PAY Anda tidak mencukupi!');location='./'</script>";
		}
	}
	
	else if(isset($_POST['transjButton'])) {
		
		if($account['gopay'] >= $_POST['price']) {
			
			$uid = $account['id'];
			$oid = "TJ".$uid.strtotime('now');
			$type = "transj";
			$dari = $_POST["from"];
			$ke = $_POST["to"];
			$price = $_POST["price"];
			$total = $account['gopay'] - $price;
			QRcode::png("http://localhost/desainerweb.id/app/gocek/tap?order=$oid", "img/order/$oid.png", 10, 10);
			
			$sql = "INSERT INTO ticket (uid,oid,type,dari,ke,price,date,time,status) 
			VALUES ('$uid','$oid','$type','$dari','$ke','$price','$date','$time','Y')";
			$query = mysqli_query($con,$sql);
			
			$squ = "UPDATE account SET gopay='$total' WHERE id='$_SESSION[gocek]' ";
			$queru = mysqli_query($con,$squ);
			
			echo "<script>location='ticket'</script>";
		
		} else {
			
			echo "<script>alert('Saldo GO-PAY Anda tidak mencukupi!');location='./'</script>";
		}
	}
	
	else if(isset($_POST['mrtjButton'])) {
		
		if($account['gopay'] >= $_POST['price']) {
			
			$uid = $account['id'];
			$oid = "MJ".$uid.strtotime('now');
			$type = "mrtj";
			$dari = $_POST["from"];
			$ke = $_POST["to"];
			$price = $_POST["price"];
			$total = $account['gopay'] - $price;
			QRcode::png("http://localhost/desainerweb.id/app/gocek/tap?order=$oid", "img/order/$oid.png", 10, 10);
			
			$sql = "INSERT INTO ticket (uid,oid,type,dari,ke,price,date,time,status) 
			VALUES ('$uid','$oid','$type','$dari','$ke','$price','$date','$time','Y')";
			$query = mysqli_query($con,$sql);
			
			$squ = "UPDATE account SET gopay='$total' WHERE id='$_SESSION[gocek]' ";
			$queru = mysqli_query($con,$squ);
			
			echo "<script>location='ticket'</script>";
		
		} else {
			
			echo "<script>alert('Saldo GO-PAY Anda tidak mencukupi!');location='./'</script>";
		}
	}
	
	else if(isset($_POST['lrtjButton'])) {
		
		if($account['gopay'] >= $_POST['price']) {
			
			$uid = $account['id'];
			$oid = "LJ".$uid.strtotime('now');
			$type = "lrtj";
			$dari = $_POST["from"];
			$ke = $_POST["to"];
			$price = $_POST["price"];
			$total = $account['gopay'] - $price;
			QRcode::png("http://localhost/desainerweb.id/app/gocek/tap?order=$oid", "img/order/$oid.png", 10, 10);
			
			$sql = "INSERT INTO ticket (uid,oid,type,dari,ke,price,date,time,status) 
			VALUES ('$uid','$oid','$type','$dari','$ke','$price','$date','$time','Y')";
			$query = mysqli_query($con,$sql);
			
			$squ = "UPDATE account SET gopay='$total' WHERE id='$_SESSION[gocek]' ";
			$queru = mysqli_query($con,$squ);
			
			echo "<script>location='ticket'</script>";
		
		} else {
			
			echo "<script>alert('Saldo GO-PAY Anda tidak mencukupi!');location='./'</script>";
		}
	}
?>