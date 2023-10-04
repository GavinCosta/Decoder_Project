const polybiusModule = (function () {
  //Create a key to reference value pairs
  function polybius(input = "", encode = true) {
    const decodeObj = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i/j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    const lookupObj = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };

    //create a variable to store results
    let result = "";

    if (encode) {
      //loop through each character and make input lowercase
      for (let char of input.toLowerCase()) {
        //add spaces if they exist
        if (char === " ") {
          result += " ";
        } else {
          //replace each letter with their key value
          result += lookupObj[char];
        }
      }
      return result;
      //Decoding
    } else {
      //input without spaces
      const noSpaceInput = input.replace(/\s/g, ""); //112151
      //return false if an odd number of values are inputted
      if (noSpaceInput.length % 2 === 1) return false;
      //loop through input
      for (let i = 0; i < input.length; i += 2) {
        //add spaces if they exist
        if (input[i] === " ") {
          result += input[i];
          //If theres a space only move index forward 1 space before next loop
          i = i - 1;
          //If no spaces exist
        } else {
          //Get next 2 numbers in input and add them to result
          const firstNum = input[i];
          const secondNum = input[i + 1];
          result += decodeObj[`${firstNum}${secondNum}`];
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
