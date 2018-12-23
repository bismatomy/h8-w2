function konversiMenit(menit) {
 var x = menit / 60
 var y = Math.floor(x)
 var z = menit - 60

 if(z < 10){
 console.log(y+':'+'0'+z+' min')
 }
 else{
 console.log(y+':'+z+' min')  
 }
 
 }

 konversiMenit(73)
 console.log(konversiMenit)