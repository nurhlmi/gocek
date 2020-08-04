function commuterConfirm() {
	
	var x = document.getElementById("commuterFrom").value;
	var y = document.getElementById("commuterTo").value;
	var z = document.getElementById("gopay").value;
	
	if(x == "") {
		document.getElementById("commuter-notice").innerHTML = "Pilih stasiun keberangkatan Anda.";
	
	} else if(y == "") {
		document.getElementById("commuter-notice").innerHTML = "Pilih stasiun tujuan Anda.";
	
	} else if(x == y) {
		document.getElementById("commuter-notice").innerHTML = "Tidak dapat naik dan turun di stasiun yang sama!";
	
	} else {
		
		document.getElementById("commuterFrom").setAttribute("disabled", "disabled");
		document.getElementById("commuterTo").setAttribute("disabled", "disabled");
		
		document.getElementById("commuter-confirm").style.display = "none";
		document.getElementById("commuter-checkout").style.display = "block";
		
		if(x == "BGR") {		// Stasiun Bogor
			document.getElementById("commuterFromInput").setAttribute("value", "Bogor");
			
			if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 5000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp5.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 7000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp7.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 7000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp7.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "DP") {	// Stasiun Depok
			document.getElementById("commuterFromInput").setAttribute("value", "Depok");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "MRI") {	// Stasiun Manggarai
			document.getElementById("commuterFromInput").setAttribute("value", "Manggarai");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 5000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp5.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "JNG") {	// Stasiun Jatinegara
			document.getElementById("commuterFromInput").setAttribute("value", "Jatinegara");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "BKS") {	// Stasiun Bekasi
			document.getElementById("commuterFromInput").setAttribute("value", "Bekasi");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 7000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp7.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "DU") {	// Stasiun Duri
			document.getElementById("commuterFromInput").setAttribute("value", "Duri");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "AK") {	// Stasiun Angke
			document.getElementById("commuterFromInput").setAttribute("value", "Angke");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 7000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp7.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "JAKK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jakarta Kota");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
		
		else if(x == "JAKK") {	// Stasiun Jakarta Kota
			document.getElementById("commuterFromInput").setAttribute("value", "Jakarta Kota");
			
			if(y == "BGR") {
				var p = document.getElementById("commuterPrice").value = 6000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp6.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bogor");
			}
			else if(y == "DP") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Depok");
			}
			else if(y == "MRI") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Manggarai");
			}
			else if(y == "JNG") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Jatinegara");
			}
			else if(y == "DU") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Duri");
			}
			else if(y == "AK") {
				var p = document.getElementById("commuterPrice").value = 3000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp3.000";
				document.getElementById("commuterToInput").setAttribute("value", "Angke");
			}
			else if(y == "BKS") {
				var p = document.getElementById("commuterPrice").value = 4000;
				document.getElementById("commuterPriceInput").innerHTML = "Rp4.000";
				document.getElementById("commuterToInput").setAttribute("value", "Bekasi");
			}
			
			if(z >= p) {
				document.getElementById("commuterButton1").style.display = "block";
				document.getElementById("commuterButton2").style.display = "none";
				document.getElementById("commuter-gopay").innerHTML = "";
			} else {
				document.getElementById("commuterButton1").style.display = "none";
				document.getElementById("commuterButton2").style.display = "block";
				document.getElementById("commuter-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
			}
		}
	}
}

function commuterCancel() {
	
	document.getElementById("commuterFrom").removeAttribute("disabled");
	document.getElementById("commuterTo").removeAttribute("disabled");
	
	document.getElementById("commuter-confirm").style.display = "block";
	document.getElementById("commuter-checkout").style.display = "none";
	document.getElementById("commuter-notice").innerHTML = "";
}