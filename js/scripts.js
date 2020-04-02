function convertToRoman(number) {
  console.log(number);
  if(!+number)
      return false;
  var digits = String(+number).split("");
      key=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"];
      roman="";
      i = 3;
      while (i--)
      


}




// First rule I=1 and II=2.
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