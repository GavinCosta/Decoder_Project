const substitutionModule = (function () {
  //create reference alphabet
  const encodeObj = "abcdefghijklmnopqrstuvwxyz";

  //we need to loop through input find index at lookup alphabet and replace each character with the corresponding alphabet character at that index
  function substitution(input = "", alphabet = "", encode = true) {
    //create open string result to return with finished code
    let result = "";
    // return false if alphabet isnt exactly 26 chars
    if (alphabet.length !== 26) {
      return false;
    }
    //Loop through alphabet and return false if there are any repeating chars
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    if (encode) {
      //loop through input, find indexOf lookup, push alphabet at that index to result
      for (let char of input.toLowerCase()) {
        //add value if input includes characters not present in encodeObj
        if (!encodeObj.includes(char)) {
          result += char;
        } else {
          //Create variable to hold index number of char
          const index = encodeObj.indexOf(char);
          result += alphabet[index];
        }
      }
    }
    //Decoding (encode in reverse)
    if (!encode) {
      for (let char of input.toLowerCase()) {
        //Set condition to return value if alphabet doesnt include inputted char
        if (!alphabet.includes(char)) {
          result += char;
        } else {
          //Create variable to hold index number of char
          const index = alphabet.indexOf(char);
          result += encodeObj[index];
        }
      }
    }
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
