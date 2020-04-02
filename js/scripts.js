function convertToRoman(number) {
  console.log(number);
  if(!+number)
      return false;
  else if (number > 3999) {
    return "Number must be less than or equal to 3999";
  } else if (number <1 || number === 0) {
    return "Number must be greater than or equal to 1";
  } 
  var digits = String(+number).split("");
      key=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"];
      roman="";
      i = 3;
  while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;



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