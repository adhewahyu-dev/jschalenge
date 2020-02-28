function kabisat(tahun1,tahun2){
	for(var angka = tahun1; angka <= tahun2; angka++){
		if(angka % 4 == 0 && angka % 100 != 0 || angka % 400 == 0){
			console.log(angka+' ')
		}
	}
}

kabisat(2000,2010)