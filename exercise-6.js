console.log('Looping Pertama')

for (var num =2; num <= 20; num++){
  if(num % 2 === 0){
    console.log(num + '- I love coding')
  }
}

console.log('Looping Kedua')

for (var num =20; num >= 2; num--){
  if(num % 2 === 0){
    console.log(num + '- I love coding')
  }
}

console.log('==============================')

console.log("Looping Pertama")
for (var i = 1; i <= 20; i++){
  console.log(i + '- I love coding')
}

console.log('Looping Kedua')
for (var i = 20; i >= 1; i--){
  console.log(i + '- I will become fullstack developer')
}

console.log('==============================')

var counter = 0
var genap = "Genap"
var ganjil = "Ganjil"
for (var i=1; i <= 100; i++){
  if (i % 2 === 0){
    console.log(i , genap)
    counter += 1
  } else{
    console.log(i , ganjil)
    counter += 1
  }
}

console.log('==============================')

var counter = 0
var nonkelipatan = ""
var kelipatan3 = "kelipatan 3"
var kelipatan6 = "kelipatan 6"
var kelipatan10 = "kelipatan 10" 

for(var i=1; i<=100; i++){
  if(i % 6 === 0){
    console.log(i, kelipatan6)
    counter += 5
  }
  else if(i % 3 === 0){
    console.log(i, kelipatan3)
    counter += 2
  }
  else if(i % 10 === 0){
    console.log(i, kelipatan10)
    counter += 9
  }
  else{
    console.log(nonkelipatan)
  }
}