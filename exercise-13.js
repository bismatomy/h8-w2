function xo(str){
	var counter1 = 0
  var counter2 = 0
	for(var i = 0; i < str.length; i++){
		if(str[i] === 'x'){
			counter1 += 1
		}
    else {
      counter2 += 1
    }
	}

	if( counter1 === counter2 ){
		console.log('true')
	}
	else{
		console.log('false')
	}

  return counter1
  return counter2
  
}

xo('ooxoxoo')
console.log(xo)