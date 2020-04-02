function convertToRoman(number) {
  console.log(number);
    if (number < 1) {
    return "Numbers must be greater than or equal to 1"; 
    } else if (number > 3999) {
      return "Numbers must be less than or equal to 3999" ;
    } else if (number >= 1000) {
      return "M" + convertToRoman(number - 1000);
    } else if (number >= 900) {
      return "CM" + convertToRoman(number - 900);
    } else if (number >= 500) {
      return "D" + convertToRoman(number - 500);
    } else if (number >= 400) {
      return "CD" + convertToRoman(number - 400);
    } else if (number >= 100) {
      return "C" + convertToRoman(number - 100);
    } else if (number >= 90) {
      return "XC" + convertToRoman(number - 90);
    } else if (number >= 50) {
      return "L" + convertToRoman(number - 50);
    } else if (number >= 40) {
      return "XL" + convertToRoman(number - 40); 
    } else if (number >= 10) {
    return "X" + convertToRoman(number - 10);
  } else if (number >= 9) {
    return "IX" + convertToRoman(number - 9); 
  } else if (number >= 5) {
    return "V" + convertToRoman(number - 5); 
  } else if (number >= 4) {
    return "IV" + convertToRoman(number - 4);
  } else (number >= 1) 
    return "I" + convertToRoman(number - 1);
       
  }








// UI logic
$(document).ready(function() {
  $("form#convert").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numInput").val());
    var result = convertToRoman(number);
    if (result){
      $(".result").text(result);
    }
    console.log(number);
  });
});


// spec one program will add values of all symbols so III = 3 
// spec two numbers can only range from >= 1 and <= 3,999
// spec three there can not be more than three of the same characters on one line, so to get 4 we subtract I from V and get IV. 



  












//   let roman = "";

//   const romanNumList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   let a;
//   if (number < 1 || number > 3999)
//     return "Enter a number between 1 and 3999";
//   else {
//     for (let key in romanNumList[key]) {
//       a = Math.floor(number / romanNumList[key]);
//       if (a >= 0) {
//         for (let i = 0; i < a; i++) {
//           roman += key;
//         }


//       }
//       number = number % romanNumList[key];
//     }
//   }

//   return roman;

// }