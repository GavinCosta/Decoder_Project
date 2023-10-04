const caesarModule = (function () {
  // create alphabet for reference
  const lookup = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input = "", shift, encode = true) {
    //create result to hold what we return
    let result = "";
    // edge cases return false
    if (!input || !shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    //loop thru input letters
    for (let i = 0; i < input.length; i++) {
      //set input to lowercase to avoid case sensitive situations
      const char = input[i].toLowerCase();
      //reference lookup
      if (lookup.includes(char)) {
        //create index to hold index of char
        const index = lookup.indexOf(char);
        //If encode = true
        if (encode) {
          //Find shifted index
          let newIndex = (index + shift) % 26;
          //If newIndex is negative
          if (newIndex < 0) {
            //Make positive
            newIndex = (newIndex + 26) % 26;
          }
          //Add final result
          result += lookup[newIndex];
          //If encode is false, find newIndex
        } else {
          //Subtract shift to find decoded index
          let newIndex = (index - shift) % 26;
          //If newIndex is negative
          if (newIndex < 0) {
            //make positive
            newIndex = (newIndex + 26) % 26;
          }
          //return decoded result
          result += lookup[newIndex];
        } //If chars arent present in lookup
      } else {
        //add to result
        result += char;
      }
    }
    //return final message
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
