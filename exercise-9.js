function ShoutOut(){
  console.log("Halo Function!")
  
}

ShoutOut()

console.log('=======================')


function calculateMultiply(num1, num2){
var hasilperkalian = num1 * num2

console.log(hasilperkalian)
}

calculateMultiply(5, 6)
console.log(calculateMultiply)

console.log('=======================')

function processSentence(name, age, address, hobby){

var fullSentence = ('Nama saya '+ name + ' Umur saya ' + age + ' Alamat saya di ' + address+ ' dan saya punya hobby yaitu ' +  hobby + '!')
console.log(fullSentence)
return processSentence
}

processSentence('Agus' , 30 , 'Jln. Malioboro, Yogyakarta' , 'gaming')
console.log(processSentence)
