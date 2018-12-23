function konversiMenit(menit) {
 var x = menit / 60
 var y = Math.floor(x)
 var z = menit - (y * 60)

 if(z < 10){
 console.log(y+':'+'0'+z)
 }
 else{
 console.log(y+':'+z)  
 }
 
 }

 konversiMenit(124)
 console.log(konversiMenit)