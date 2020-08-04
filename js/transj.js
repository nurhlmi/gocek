function transjConfirm() {
	
	var x = document.getElementById("transjFrom").value;
	var y = document.getElementById("transjTo").value;
	var z = document.getElementById("gopay").value;
	
	if(x == "") {
		document.getElementById("transj-notice").innerHTML = "Pilih halte keberangkatan Anda.";
	
	} else if(y == "") {
		document.getElementById("transj-notice").innerHTML = "Pilih halte tujuan Anda.";
	
	} else if(x == y) {
		document.getElementById("transj-notice").innerHTML = "Tidak dapat naik dan turun di halte yang sama!";
	
	} else {
		
		document.getElementById("transjFrom").setAttribute("disabled", "disabled");
		document.getElementById("transjTo").setAttribute("disabled", "disabled");
		
		document.getElementById("transj-confirm").style.display = "none";
		document.getElementById("transj-checkout").style.display = "block";
		
		if(x == "K1.01") {			// Halte Blok M
			document.getElementById("transjFromInput").setAttribute("value", "Blok M");
			
			if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.02") {		// Halte Masjid Agung
			document.getElementById("transjFromInput").setAttribute("value", "Masjid Agung");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.03") {		// Halte Bundaran Senayan
			document.getElementById("transjFromInput").setAttribute("value", "Bundaran Senayan");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.04") {		// Halte Gelora Bung Karno
			document.getElementById("transjFromInput").setAttribute("value", "Gelora Bung Karno");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.05") {		// Halte Polda Metro Jaya
			document.getElementById("transjFromInput").setAttribute("value", "Polda Metro Jaya");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.06") {		// Halte Bendungan Hilir
			document.getElementById("transjFromInput").setAttribute("value", "Bendungan Hilir");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.07") {		// Halte Karet Sudirman
			document.getElementById("transjFromInput").setAttribute("value", "Karet Sudirman");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.09") {		// Halte Dukuh Atas 1
			document.getElementById("transjFromInput").setAttribute("value", "Dukuh Atas 1");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.10") {		// Halte Tosari
			document.getElementById("transjFromInput").setAttribute("value", "Tosari");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.12") {		// Halte Sarinah
			document.getElementById("transjFromInput").setAttribute("value", "Sarinah");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.13") {		// Halte Bank Indonesia
			document.getElementById("transjFromInput").setAttribute("value", "Bank Indonesia");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.14") {		// Halte Monas
			document.getElementById("transjFromInput").setAttribute("value", "Monas");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.15") {		// Halte Harmoni Central
			document.getElementById("transjFromInput").setAttribute("value", "Harmoni Central");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.16") {		// Halte Sawah Besar
			document.getElementById("transjFromInput").setAttribute("value", "Sawah Besar");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.17") {		// Halte Mangga Besar
			document.getElementById("transjFromInput").setAttribute("value", "Mangga Besar");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.18") {		// Halte Olimo
			document.getElementById("transjFromInput").setAttribute("value", "Olimo");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.19") {		// Halte Glodok
			document.getElementById("transjFromInput").setAttribute("value", "Glodok");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.20") {document.getElementById("transjToInput").setAttribute("value", "Kota");}
		}
		
		else if(x == "K1.20") {		// Halte Kota
			document.getElementById("transjFromInput").setAttribute("value", "Kota");
			
			if(y == "K1.01") {document.getElementById("transjToInput").setAttribute("value", "Blok M");}
			else if(y == "K1.02") {document.getElementById("transjToInput").setAttribute("value", "Masjid Agung");}
			else if(y == "K1.03") {document.getElementById("transjToInput").setAttribute("value", "Bundaran Senayan");}
			else if(y == "K1.04") {document.getElementById("transjToInput").setAttribute("value", "Gelora Bung Karno");}
			else if(y == "K1.05") {document.getElementById("transjToInput").setAttribute("value", "Polda Metro Jaya");}
			else if(y == "K1.06") {document.getElementById("transjToInput").setAttribute("value", "Bendungan Hilir");}
			else if(y == "K1.07") {document.getElementById("transjToInput").setAttribute("value", "Karet Sudirman");}
			else if(y == "K1.09") {document.getElementById("transjToInput").setAttribute("value", "Dukuh Atas 1");}
			else if(y == "K1.10") {document.getElementById("transjToInput").setAttribute("value", "Tosari");}
			else if(y == "K1.12") {document.getElementById("transjToInput").setAttribute("value", "Sarinah");}
			else if(y == "K1.13") {document.getElementById("transjToInput").setAttribute("value", "Bank Indonesia");}
			else if(y == "K1.14") {document.getElementById("transjToInput").setAttribute("value", "Monas");}
			else if(y == "K1.15") {document.getElementById("transjToInput").setAttribute("value", "Harmoni Central");}
			else if(y == "K1.16") {document.getElementById("transjToInput").setAttribute("value", "Sawah Besar");}
			else if(y == "K1.17") {document.getElementById("transjToInput").setAttribute("value", "Mangga Besar");}
			else if(y == "K1.18") {document.getElementById("transjToInput").setAttribute("value", "Olimo");}
			else if(y == "K1.19") {document.getElementById("transjToInput").setAttribute("value", "Glodok");}
		}
		
		var p = document.getElementById("transjPrice").value = 3500;
		document.getElementById("transjPriceInput").innerHTML = "Rp3.500";
		
		if(z >= p) {
			document.getElementById("transjButton1").style.display = "block";
			document.getElementById("transjButton2").style.display = "none";
			document.getElementById("transj-gopay").innerHTML = "";
		} else {
			document.getElementById("transjButton1").style.display = "none";
			document.getElementById("transjButton2").style.display = "block";
			document.getElementById("transj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
		}
	}
}

function transjCancel() {
	
	document.getElementById("transjFrom").removeAttribute("disabled");
	document.getElementById("transjTo").removeAttribute("disabled");
	
	document.getElementById("transj-confirm").style.display = "block";
	document.getElementById("transj-checkout").style.display = "none";
	document.getElementById("transj-notice").innerHTML = "";
}