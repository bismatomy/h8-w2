var nama = "Bisma"
var peran = ""

if (peran === "ksatria"){ 
  console.log("Selamat datang di Dunia Proxytia," + nama)
  console.log("Halo " + peran + nama + " kamu dapat menyerang dengan senjatamu")
}
else if (peran === "tabib"){
  console.log("Selamat datang di Dunia Proxytia," + nama)
  console.log("Halo " + peran + nama + " kamu akan membantu temanmu yang terluka")
}
else if (peran === "penyihir"){
  console.log("Selamat datang di Dunia Proxytia," + nama)
  console.log("Halo " + peran + nama + " ciptakan keajaiban yang membantu kemenanganmu!")
}
else if(nama === ""){
  console.log( "Nama harus diisi!")
}
else {
  console.log("Halo " + nama + " , Pilih peranmu untuk memulai game!")
}