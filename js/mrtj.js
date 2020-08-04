function mrtjConfirm() {
	
	var x = document.getElementById("mrtjFrom").value;
	var y = document.getElementById("mrtjTo").value;
	var z = document.getElementById("gopay").value;
	
	if(x == "") {
		document.getElementById("mrtj-notice").innerHTML = "Pilih stasiun keberangkatan Anda.";
	
	} else if(y == "") {
		document.getElementById("mrtj-notice").innerHTML = "Pilih stasiun tujuan Anda.";
	
	} else if(x == y) {
		document.getElementById("mrtj-notice").innerHTML = "Tidak dapat naik dan turun di stasiun yang sama!";
	
	} else {
		
		document.getElementById("mrtjFrom").setAttribute("disabled", "disabled");
		document.getElementById("mrtjTo").setAttribute("disabled", "disabled");
		
		document.getElementById("mrtj-confirm").style.display = "none";
		document.getElementById("mrtj-checkout").style.display = "block";
		
		if(x == "BHI") {		// Stasiun Bundaran HI
			document.getElementById("mrtjFromInput").setAttribute("value", "Bundaran HI");
			
			if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 13000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp13.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 14000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp14.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "DKA") {	// Stasiun Dukuh Atas
			document.getElementById("mrtjFromInput").setAttribute("value", "Dukuh Atas");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 12000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp12.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 14000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp14.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "STB") {	// Stasiun Setiabudi
			document.getElementById("mrtjFromInput").setAttribute("value", "Setiabudi");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 2000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp2.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 13000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp13.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "BNH") {	// Stasiun Bendungan Hilir
			document.getElementById("mrtjFromInput").setAttribute("value", "Bendungan Hilir");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 2000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp2.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 12000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp12.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "IST") {	// Stasiun Istora
			document.getElementById("mrtjFromInput").setAttribute("value", "Istora");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "SNY") {	// Stasiun Senayan
			document.getElementById("mrtjFromInput").setAttribute("value", "Senayan");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "SSM") {	// Stasiun ASEAN
			document.getElementById("mrtjFromInput").setAttribute("value", "ASEAN");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "BLM") {	// Stasiun Blok M
			document.getElementById("mrtjFromInput").setAttribute("value", "Blok M");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "BLA") {	// Stasiun Blok A
			document.getElementById("mrtjFromInput").setAttribute("value", "Blok A");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "HJN") {	// Stasiun Haji Nawi
			document.getElementById("mrtjFromInput").setAttribute("value", "Haji Nawi");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "CPR") {	// Stasiun Cipete Raya
			document.getElementById("mrtjFromInput").setAttribute("value", "Cipete Raya");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 3000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp3.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "FTM") {	// Stasiun Fatmawati
			document.getElementById("mrtjFromInput").setAttribute("value", "Fatmawati");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 13000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp13.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 12000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp12.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "LBB") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Lebak Bulus");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "LBB") {	// Stasiun Lebak Bulus
			document.getElementById("mrtjFromInput").setAttribute("value", "Lebak Bulus");
			
			if(y == "BHI") {
				var p = document.getElementById("mrtjPrice").value = 14000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp14.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bundaran HI");
			}
			else if(y == "DKA") {
				var p = document.getElementById("mrtjPrice").value = 14000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp14.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Dukuh Atas");
			}
			else if(y == "STB") {
				var p = document.getElementById("mrtjPrice").value = 13000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp13.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Setiabudi");
			}
			else if(y == "BNH") {
				var p = document.getElementById("mrtjPrice").value = 12000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp12.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Bendungan Hilir");
			}
			else if(y == "IST") {
				var p = document.getElementById("mrtjPrice").value = 11000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp11.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Istora");
			}
			else if(y == "SNY") {
				var p = document.getElementById("mrtjPrice").value = 10000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp10.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Senayan");
			}
			else if(y == "SSM") {
				var p = document.getElementById("mrtjPrice").value = 9000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp9.000";
				document.getElementById("mrtjToInput").setAttribute("value", "ASEAN");
			}
			else if(y == "BLM") {
				var p = document.getElementById("mrtjPrice").value = 8000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp8.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok M");
			}
			else if(y == "BLA") {
				var p = document.getElementById("mrtjPrice").value = 7000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp7.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Blok A");
			}
			else if(y == "HJN") {
				var p = document.getElementById("mrtjPrice").value = 6000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp6.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Haji Nawi");
			}
			else if(y == "CPR") {
				var p = document.getElementById("mrtjPrice").value = 5000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp5.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Cipete Raya");
			}
			else if(y == "FTM") {
				var p = document.getElementById("mrtjPrice").value = 4000;
				document.getElementById("mrtjPriceInput").innerHTML = "Rp4.000";
				document.getElementById("mrtjToInput").setAttribute("value", "Fatmawati");
			}
			
			if(z >= p) {
				document.getElementById("mrtjButton1").style.display = "block";
				document.getElementById("mrtjButton2").style.display = "none";
				document.getElementById("mrtj-gopay").innerHTML = "";
			} else {
				document.getElementById("mrtjButton1").style.display = "none";
				document.getElementById("mrtjButton2").style.display = "block";
				document.getElementById("mrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
	}
}

function mrtjCancel() {
	
	document.getElementById("mrtjFrom").removeAttribute("disabled");
	document.getElementById("mrtjTo").removeAttribute("disabled");
	
	document.getElementById("mrtj-confirm").style.display = "block";
	document.getElementById("mrtj-checkout").style.display = "none";
	document.getElementById("mrtj-notice").innerHTML = "";
}