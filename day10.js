var input = "1113122113"



function elvish() {
  for (var z=0; z<40; z++){
    if (z !== 0) input = result;
    var result = ""
    for(var i = 0; i < input.length; i++){
      start = input[i];
      repeating = 0;
      while(input[i] == start){
        repeating +=1;
        i++;
      }
      i--;
      result+=repeating;
      result+=start;
      // console.log([result,i])
    }
    // console.log("one loop")
  }
  return result
}
console.log(elvish().length)
