let numberToConvert = {};


numberToConvert.convertNumber = (value) => {
  let word = '';
  let number = value

  // check entered value is string and remove all characters
  if(typeof(number) === 'string'){
    number = parseInt(number.replace(/\D/g,''))
  }
  const ones = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

  // entered number is number and valid number
  if(typeof number == "number" && !isNaN(number)){
    for (let i = 0; i < thousands.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = ones[Math.floor(tempNumber/Math.pow(1000,i))] + thousands[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + '-' + ones[Math.floor(tempNumber/Math.pow(1000,i))%10] + thousands[i] + ' ' + word;
        }
      }
      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = ones[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hunderd ' + word;
    }
  }else{
    word = "Enter only numerical characters"
  }
  return word;
};

//get the entered value 
let numberEntered =  process.argv[2]

let convertedValue = numberToConvert.convertNumber(numberEntered)
console.log(convertedValue)

module.exports = numberToConvert;
