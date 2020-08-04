function lrtjConfirm() {
	
	var x = document.getElementById("lrtjFrom").value;
	var y = document.getElementById("lrtjTo").value;
	var z = document.getElementById("gopay").value;
	
	if(x == "") {
		document.getElementById("lrtj-notice").innerHTML = "Pilih stasiun keberangkatan Anda.";
	
	} else if(y == "") {
		document.getElementById("lrtj-notice").innerHTML = "Pilih stasiun tujuan Anda.";
	
	} else if(x == y) {
		document.getElementById("lrtj-notice").innerHTML = "Tidak dapat naik dan turun di stasiun yang sama!";
	
	} else {
		
		document.getElementById("lrtjFrom").setAttribute("disabled", "disabled");
		document.getElementById("lrtjTo").setAttribute("disabled", "disabled");
		
		document.getElementById("lrtj-confirm").style.display = "none";
		document.getElementById("lrtj-checkout").style.display = "block";
		
		if(x == "S-02") {			// Halte Boulevard Utara
			document.getElementById("lrtjFromInput").setAttribute("value", "Boulevard Utara");
			
			if(y == "S-03") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Selatan");}
			else if(y == "S-04") {document.getElementById("lrtjToInput").setAttribute("value", "Pulomas");}
			else if(y == "S-05") {document.getElementById("lrtjToInput").setAttribute("value", "Equestrian");}
			else if(y == "S-06") {document.getElementById("lrtjToInput").setAttribute("value", "Velodrome");}
		}
		
		else if(x == "S-03") {		// Halte Boulevard Selatan
			document.getElementById("lrtjFromInput").setAttribute("value", "Boulevard Selatan");
			
			if(y == "S-02") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Utara");}
			else if(y == "S-04") {document.getElementById("lrtjToInput").setAttribute("value", "Pulomas");}
			else if(y == "S-05") {document.getElementById("lrtjToInput").setAttribute("value", "Equestrian");}
			else if(y == "S-06") {document.getElementById("lrtjToInput").setAttribute("value", "Velodrome");}
		}
		
		else if(x == "S-04") {		// Halte Pulomas
			document.getElementById("lrtjFromInput").setAttribute("value", "Pulomas");
			
			if(y == "S-02") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Utara");}
			else if(y == "S-03") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Selatan");}
			else if(y == "S-05") {document.getElementById("lrtjToInput").setAttribute("value", "Equestrian");}
			else if(y == "S-06") {document.getElementById("lrtjToInput").setAttribute("value", "Velodrome");}
		}
		
		else if(x == "S-05") {		// Halte Equestrian
			document.getElementById("lrtjFromInput").setAttribute("value", "Equestrian");
			
			if(y == "S-02") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Utara");}
			else if(y == "S-03") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Selatan");}
			else if(y == "S-04") {document.getElementById("lrtjToInput").setAttribute("value", "Pulomas");}
			else if(y == "S-06") {document.getElementById("lrtjToInput").setAttribute("value", "Velodrome");}
		}
		
		else if(x == "S-06") {		// Halte Velodrome
			document.getElementById("lrtjFromInput").setAttribute("value", "Velodrome");
			
			if(y == "S-02") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Utara");}
			else if(y == "S-03") {document.getElementById("lrtjToInput").setAttribute("value", "Boulevard Selatan");}
			else if(y == "S-04") {document.getElementById("lrtjToInput").setAttribute("value", "Pulomas");}
			else if(y == "S-05") {document.getElementById("lrtjToInput").setAttribute("value", "Equestrian");}
		}
		
		var p = document.getElementById("lrtjPrice").value = 5000;
		document.getElementById("lrtjPriceInput").innerHTML = "Rp5.000";
		
		if(z >= p) {
			document.getElementById("lrtjButton1").style.display = "block";
			document.getElementById("lrtjButton2").style.display = "none";
			document.getElementById("lrtj-gopay").innerHTML = "";
		} else {
			document.getElementById("lrtjButton1").style.display = "none";
			document.getElementById("lrtjButton2").style.display = "block";
			document.getElementById("lrtj-gopay").innerHTML = "Saldo GO-PAY Anda tidak mencukupi!";
		}
	}
}

function lrtjCancel() {
	
	document.getElementById("lrtjFrom").removeAttribute("disabled");
	document.getElementById("lrtjTo").removeAttribute("disabled");
	
	document.getElementById("lrtj-confirm").style.display = "block";
	document.getElementById("lrtj-checkout").style.display = "none";
	document.getElementById("lrtj-notice").innerHTML = "";
}