var crypto = require('crypto');
var secretKey = "bgvyzdsv";



function mine(secretKey){

  test1 = decoded("abcdef609043")
  test2 = decoded("pqrstuv1048970")
  test3 = decoded("bgvyzdsv254575")
  console.log(test1)
  console.log(test2)
  console.log(test3)
  console.log(isAdventCoin(test1))
  console.log(isAdventCoin(test2))
  console.log(isAdventCoin(test3))


  for(var i=0; i < 9999999999999999; i++ ){
    decodedShizzle = decoded(secretKey + i.toString())
    if (isAdventCoin(decodedShizzle)){
      return i;
    }
  }
};

function decoded(input){
  return crypto.createHash('md5').update(input).digest('hex')
};

function isAdventCoin(decoded){
  // console.log(decoded.substr(0,5))
  if(decoded.substr(0,5) == "00000"){
    return true
  }else{
    return false
  }
};


console.log(mine(secretKey))
