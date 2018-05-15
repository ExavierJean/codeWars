// INSTRUSTIONS

/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// SOLUTION:

function squareDigits(num){
  //may the code be with you
  var a = num.toString();
  var heye = ''; 
  for(var i = 0; i < a.length; i++){
    var b = a[i];
    b = parseInt(b);
    b = b*b;
    b = b.toString();
    heye += b; 
  }
  return parseInt(heye);
}

// SAMPLE TEST:

// Test.assertEquals(squareDigits(9119), 811181);