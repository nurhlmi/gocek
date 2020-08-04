<?php
	function Random($max){
		//Huruf dan angka yang akan diacak
		$char = array("1","2","3","4","5","6","7","8","9","0");
		$keys = array();
		
		while(count($keys) < $max) {
			$x = mt_rand(0, count($char)-1);
			if(!in_array($x, $keys)) {
			   $keys[] = $x;   
			}		
		}
		
		$random = '';
		foreach($keys as $key => $val){
		   $random .= $char[$val];  
		}
		return $random;
	} $acak = Random(4);
	//echo $acak."-".$code;
?>