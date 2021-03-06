// locating the if of generate in the html and making that gerenerate btn
var generateBtn = document.querySelector("#generate");
//creates a prompt asking for the lenght of the password
var characterlength = prompt("password length", "");
// console.log(characterlength)

///varible for all characters ///
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!^%$#*';
//function to generate a Password 
function generatePassword(length) {
  //making the result be a string 
    var result = ' ';
    //local var ofcharacter length equal to the length of the string
    var charactersLength = characters.length;
    //for loop to loop over all characters
    for ( let i = 0; i < length; i++ ) {
      //the result of this for loop is creating random choices of characters 
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //stopos the function 
    return result;
}
// Write password to the #password input
function writePassword() {
  //setting the GeneratePassword function equal to the var of password and makes the function loop for the number  of characters  the prompt was given
  var password = generatePassword(characterlength);
  // finding the html id with the tag password
  var passwordText = document.querySelector("#password");
//setting the passwordtext to display the password
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
