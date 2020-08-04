<?php
	date_default_timezone_set("Asia/Jakarta");
	
	$hari =	date('d');		$detik = date('s');
	$bulan = date('m');		$menit = date('i');
	$tahun = date('Y');		$jam = date('H');
	
	$date = "$hari/$bulan/$tahun";
	$time = "$jam:$menit:$detik";
?>