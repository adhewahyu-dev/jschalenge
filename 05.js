const hasil = [  // array kosong
    [],
    [],
    [],
    []
  ]
  const genap = angka => angka % 2 === 0  // function genap
  const ganjil = angka => angka % 2 === 1 // function ganjil
  const kelipatan = angka => angka % 5 === 0 // function kelipatan 5
  
  
  for (let i = 1; i <= 1000; i++) {
    if (kelipatan(i) === true) {
      hasil[0].push(i) // hasil index i push ke hasil array indeks ke 0
    } else if (genap(i) === true) {
      hasil[1].push(i) // hasil index i push ke hasil array indeks ke 1
    } else if (ganjil(i) === true) {
      hasil[2].push(i) // hasil index i push ke hasil array indeks ke 2
    }
  }
  
  console.log('Even : '+hasil[1])
  console.log('Odd : ' +hasil[2])
  console.log('Kelipatan 5 : ' + hasil[0])