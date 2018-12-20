var rows1 = "*"

for(i =0; i<5; i++){
console.log(rows1)  
}

console.log('=================')
//baris
for(var i=0; i<5; i++){
  //kolom
  var rows2 = " "
  for (var j=0; j<5; j++){
    if (i == 0) {
            rows2 += '*'
        }
        else if(i == 5 - 1) {
            rows2 += '*'
        }
        else if (j === 0){
          rows2 += '*'
        }
        else {
          rows2 += "*"
        }
}
console.log(rows2)
}

console.log('=================')

for(var i=0; i<5; i++){
  var rows3 = ""
  for (var j=0; j<5; j++){
    if (i == 0) {
      rows3 += '*'
      }
      console.log(rows3)   
}
}


