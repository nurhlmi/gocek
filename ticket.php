<?php
	session_start();
	include "connect.php";
	
	$sql = "SELECT * FROM ticket WHERE uid = '$_SESSION[gocek]' ORDER by id DESC";
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
		
		<script type="text/javascript" src="jquery/jquery.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
		
		<link rel="shorcut icon" href="img/icon.ico">
		<link href="style.css" rel="stylesheet">
	</head>
	
	<body style="margin-top:150px;margin-bottom:170px">
		<div class="form-head">
			<h1>Tiket</h1>
		</div>
		
		<?php if($rows < 1) { ?>
		<div class="container">
			<div class="text-center" style="margin-top:25vh">
				<div class="row">
					<div class="col-xs-4 col-xs-offset-4">
						<img src="img/icons/tickets.png" style="margin-bottom:20px">
					</div>
				</div>
				
				<h1>Kamu Belum Memiliki Tiket</h1>
				<h2 class="silver">Ayo pesan tiketnya sekarang.</h2>
			</div>
		</div>
		
		<?php
			} else {
				
			while($account = mysqli_fetch_array($query)) {
				
				if($account['type']=="commuter") {
					$title = "Commuter Line";
					$tempat = "Stasiun";
					$image = "commuterline";
				
				} else if($account['type']=="transj") {
					$title = "Transjakarta";
					$tempat = "Halte";
					$image = "transjakarta";
				
				} else if($account['type']=="mrtj") {
					$title = "MRT Jakarta";
					$tempat = "Stasiun";
					$image = "mrtjakarta";
				
				} else if($account['type']=="lrtj") {
					$title = "LRT Jakarta";
					$tempat = "Stasiun";
					$image = "lrtjakarta";
				}
				
				if($account['status'] == "Y") {
					$status = "Menunggu Perjalanan";
					
				} else if($account['status'] == "N") {
					$status = "Dibatalkan";
					
				} else if($account['status'] == "P") {
					$status = "Dalam Perjalanan";
				
				} else if($account['status'] == "S") {
					$status = "Selesai";
				}
		?>
		<div class="list-ticket" data-toggle="modal" data-target="#<?php echo $account['id']; ?>">
			<?php if($account['status'] == "N" || $account['status'] == "S") { ?>
			<div class="row silver">
				<div class="col-xs-2">
					<img src="img/logo/<?php echo $account['type']; ?>-disabled.png">
				</div>
			<?php } else { ?>
			<div class="row">
				<div class="col-xs-2">
					<img src="img/logo/<?php echo $account['type']; ?>.png">
				</div>
			<?php } ?>
				<div class="col-xs-10">
					<h1><?php echo $tempat." ".$account['ke']; ?></h1>
					<h3 class="silver"><?php echo $status;?></h3>
					<h3 class="pull-right silver"><?php echo $account['date']; ?></h3>
				</div>
			</div>
		</div>

		<!--Modal-->
		<div class="modal fade" id="<?php echo $account['id']; ?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog full" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<img class="company" src="img/logo/<?php echo $image; ?>.png">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="container-fluid">
								<div class="row">
									<div class="col-xs-5">
										<img src="img/order/<?php echo $account['oid'].".png"; ?>">
										<h4 style="margin-left:30px">*klik 2x untuk memperbesar</h4>
									</div>
									<div class="col-xs-2" style="margin-top:10px">
										<h2>ID Order</h2>
										<h2>Tanggal</h2>
										<h2>Jam</h2>
										<h2>Tipe</h2>
										<h2>Status</h2>
									</div>
									<div class="col-xs-1 text-center" style="margin-top:10px">
										<h2>:</h2>
										<h2>:</h2>
										<h2>:</h2>
										<h2>:</h2>
										<h2>:</h2>
									</div>
									<div class="col-xs-4" style="margin-top:10px">
										<h2><?php echo $account['oid']; ?></h2>
										<h2><?php echo $account['date']; ?></h2>
										<h2><?php echo $account['time']; ?></h2>
										<h2>Single Trip</h2>
										<?php
											if($account['status'] == "Y") {
												echo "<h2 class='yellow'>Menunggu Perjalanan</h2>";
											}
											else if($account['status'] == "N") {
												echo "<h2 class='red'>Dibatalkan</h2>";
											}
											else if($account['status'] == "P") {
												echo "<h2 class='blue'>Dalam Perjalanan</h2>";
											}
											else if($account['status'] == "S") {
												echo "<h2 class='green'>Selesai</h2>";
											}
										?>
									</div>
								</div>
								<hr>
							</div>
							<div class="row">
								<div class="col-xs-5 text-center">
									<div style="margin-top:30px">
										<?php
											if($account['type'] == "commuter") {
												echo "<i class='fa fa-fw fa-subway red'></i>";
											}
											else if($account['type'] == "transj") {
												echo "<i class='fa fa-fw fa-bus blue'></i>";
											}
											else if($account['type'] == "mrtj") {
												echo "<i class='fa fa-fw fa-subway blueold'></i>";
											}
											else if($account['type'] == "lrtj") {
												echo "<i class='fa fa-fw fa-subway red'></i>";
											}
										?>
									</div>
									<span class="title">Dari <?php echo $tempat; ?></span>
									<h1><?php echo $account['dari']; ?></h1>
								</div>
								
								<div class="col-xs-2 text-center" style="padding-top:100px">
									<i class="fa fa-fw fa-arrow-right" style="color:#eaebef"></i>
								</div>
								
								<div class="col-xs-5 text-center">
									<div style="margin-top:30px">
										<i class="fa fa-fw fa-map-marker yellow"></i>
									</div>
									<span class="title">Ke <?php echo $tempat; ?></span>
									<h1><?php echo $account['ke']; ?></h1>
								</div>
							</div>
							<div class="container-fluid"><hr>
								<div class="checkout" id="checkout">
									<div class="row">
										<div class="col-xs-12 text-center">
											<h2 class="pull-left">Pembayaran
												<span class="greenold">GO <i class="fa fa-fw fa-credit-card"></i> PAY</span>
											</h2>
											<h1 class="pull-right green">Rp<?php echo number_format($account['price'],0,',','.'); ?></h1>
										</div>
										<!--<div class="col-xs-12">
											<?php if($account['status'] == "Y") { ?>
												<button class="btn-click btn-modal bg-red">Batalkan Pemesanan</button>
											<?php } else { ?>
												<button class="btn-click btn-modal bg-red">Hapus</button>
											<?php } ?>
										</div>-->
									</div>
									<!--<div class="row">
										<div class="col-xs-12">
											<button class="btn-click btn-modal bg-red" onclick="return commuterCancel()">
												Hapus
											</button>
										</div>
									</div>-->
								</div>
							</div>
						</div>
					</div>
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
				<div class="col-xs-3 green">
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
	</body>
</html>