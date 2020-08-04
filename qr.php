<html>
	<head>
		<title>QR Code</title>
	</head>
	<body>
	<!--//==== Hari ====//			//==== Jam ====//
	// d = 04 atau 14			// h = 02 atau 12 (12 jam)
	// j = 4 atau 14			// g = 2 atau 12
	// D = Mon					// H = 4 atau 24 (24 jam)
	// l = Monday				// G = 4 atau 24
	
	//==== Bulan ====//			//==== Waktu ====//
	// m = 04 atau 14			// a = am/pm
	// n = 4 atau 14			// A = AM/PM
	// M = Oct					// i = 06 atau 60 (Menit)
	// F = October				// s = 06 atau 60 (Detik)
	
	//==== Tahun ====//
	// y = 20
	// Y = 2020-->
	
	<?php
		include "qrcode/qrlib.php";
		
		QRcode::png("http://localhost/desainerweb.id/app/gocek/tap?order=CL11554771199", "image.png", 10, 10);
		echo "<img src='image.png' />";
	?>
	
	</body>
</html>