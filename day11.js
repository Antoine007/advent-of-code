var input = "vzbxkghb";
var alphabet = " abcdefghijklmnopqrstuvwxyz"

function increment(input){
  i = input.length -1
  letter_index = alphabet.indexOf(input[i])
  counter = 1;
  if(alphabet.indexOf(input[i]) == 26){
    i--;
    while(alphabet.indexOf(input[i]) == 26){
      i--;
      counter++;
    }
    letter_index = alphabet.indexOf(input[i])
    input = input.substr(0,i) + alphabet[letter_index+1] + "a".repeat(counter);
  }else{
    input = input.substr(0,i) + alphabet[letter_index+1];
  }
  return input
}
// console.log(increment("kjebkjbweskejbfja"))


function badLetters(input){
  (input.indexOf('o') === -1 && input.indexOf('i') === -1 && input.indexOf('l') === -1) ? result = false : result = true
  return result;
};

function straightLetters(string){
  result = false;
  for(var j=0; j < (string.length - 2); j++){
    letterOne   = alphabet.indexOf(string[j])
    letterTwo   = alphabet.indexOf(string[j+1])
    letterThree = alphabet.indexOf(string[j+2])
    if(letterOne + 1 == letterTwo && letterTwo + 1 == letterThree) {
      return false;
    }
  }
  return true
};
// console.log(straightLetters("bvgbjbefg"))

function twoPairs(string){
  result = [];
  for(var j=0; j < (string.length - 1); j++){
    if(string.substr(j,1) == string.substr(j+1,1)) result.push(string.substr(j,1)+string.substr(j+1,1))
    while(string.substr(j,1) == string.substr(j+1,1)) j++;
  }
  if(result.length >= 2) return false;
  return true
};
// console.log(twoPairs("kkkjj"))


function passwordMaker(input){
  for(var i = 0; i < 9999999999999999999; i++){
    input = increment(input)
    if(badLetters(input)) continue;
    if(straightLetters(input)) continue;
    if(twoPairs(input)) continue;
    return input
  }
};

console.log(passwordMaker("abcdefgh"))
console.log(passwordMaker("ghijklmn"))
console.log(passwordMaker("vzbxkghb"))
console.log(passwordMaker("vzbxxyzz"))
