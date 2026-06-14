//  freeCodeCamp.org daily challenge - June 14, 2026
//  Given a string of digits for a credit card number, determine if it's a valid card number using the following method:
//     Starting from the second-to-last digit, double every other digit moving left.
//     1. If doubling a digit results in a number greater than 9, subtract 9.
//     Sum all the digits (doubled and undoubled).
//     If the total is divisible by 10, the number is valid.

function isValidCard(number) {
  const revNumberList = number.split("").reverse();  // Flips credit card number to accomodate any length
  let count = 0;
  for (let i = 0; i<revNumberList.length;i++) { 
    if (Boolean(i%2)) {                            //   Odd digits
      if (2*revNumberList[i] > 9) {                 //   Case for overflow doubles (1.)
        count += 2*+revNumberList[i] - 9;    
      } else {                                    
        count += 2*+revNumberList[i];
      };
    } else {                                       // Even Digits
      count += +revNumberList[i];
    }
  }
  const isValid = !Boolean(count%10);              // Checking divisbility by 10
  return isValid;
}

// Tests
console.log(isValidCard("371449635398431")) // True
console.log(isValidCard("4532015112830367")) // False

// Github Copilot's Version:
// NOT MY CODE:

function isValidCard(number) {
  let sum = 0;
  let shouldDouble = false;
  
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = +number[i];
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
}
