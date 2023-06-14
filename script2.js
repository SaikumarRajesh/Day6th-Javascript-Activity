//https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb(2 link answers)

// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript
// Once you are familiar with basic syntax you can reinforce your understanding by solving these simple snippets

// 1.Find the culprit

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// Answer:
// <!-- 1 -->
// <!-- <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I’m JavaScript!");
//  </script>
//  Whats the error in this ?
// </body>
// </html> -->
// ----------------------------------------------------------------------------------------------------------------------------------------------

// 2.Find the culprit and invoke the alert

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// scripts.js

// alert(“I’m invoked!”);

// Answer:
// alert("I’m invoked!");
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — --------------------------------------------------------------------------------------


//3.Fix the below to alert Guvi geek

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -----------------------------------------------------------------------------------


//4.Fix the below to alert hello Guvi geek

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// Answer:

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );
//------------------------------------------------------------------------------------------------------------------------------------------

//5. Explain the below how it works

// explain.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

//Answer:

// alert("I'm JavaScript!");: This line displays a pop-up dialog box with the message "I'm JavaScript!".

// alert('Hello') // this line is not having semicolon: This line displays a pop-up dialog box with the message "Hello". 
// JavaScript allows you to omit the semicolon at the end of a statement, although it is generally recommended to include it 
// for clarity and to avoid potential issues.

// alert(Wor
// ld): This line displays a pop-up dialog box with the message "Wor\nld". The backtick () character is used to create a template literal,
//  which allows for multi-line strings. The line break in the string is represented by \n`, which creates a new line when the alert is displayed.

// alert(3 + 1 + 2); // this is multiple line code and its working: This line displays a pop-up dialog box with the message "6".
//  JavaScript automatically evaluates the expression 3 + 1 + 2 as the sum of the numbers and then displays the result.
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — ---------------------------------------------------------------------------------


//6. Fix the below to alert sum of two numbers

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// Answer:

// let a = prompt("First number?");
// let b = prompt("Second number?");
// let sum = Number(a) + Number(b);
// alert(sum);
//-------------------------------------------------------------------------------------------------------------------------------------------

// 7.If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// Answer:
// =>The above  code get code is blasted  is due to a comparison between two strings: "2" and "12". In JavaScript, 
// when comparing strings using the > operator, it performs a character-by-character comparison based on their Unicode code point values.
// In this case, the comparison is "2" > "12". The first character of "2" is '2', and the first character of "12" is '1'.
// When comparing these characters, the Unicode code point value of '2' is greater than the Unicode code point value of '1'.
// As a result, the comparison evaluates to true.

// var a = 2 > 12;
// // Don't touch below this
// if (a) {
//   console.log("Code is Blasted");
// } else {
//   console.log("Diffused");
// }

// =>In this corrected code, the values "2" and "12" are changed to numeric values 2 and 12. 
// Now the comparison 2 > 12 will evaluate to false since 2 is not greater than 12. 
// As a result, the else block will be executed, and the code will output "Diffused" to the console.
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -----------------------------------------------------------------------------------


//8.How to get the success in console.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// Answer:

// let a = prompt("Enter a number?");
// a= a<=0 ;
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }
//----------------------------------------------------------------------------------------------------------------------------------------

//9.How to get the correct score in console.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// Answer:

// let value = prompt('How many runs you scored in this ball');
// value=Number(value);//convert input in to number
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }
//------------------------------------------------------------------------------------------------------------------------------------------

//10.Fix the code to welcome the Employee

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// Answer:

// let login = 'Employee';
// let message = (login === 'Employee') ? 'Welcome, Employee' :
//   (login === 'Director') ? 'Greetings' :
//   (login === '') ? 'No login' :
//   '';
// console.log(message);
//-------------------------------------------------------------------------------------------------------------------------------------------

// 11.Fix the code to welcome the boss

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// Answer:

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);
//-------------------------------------------------------------------------------------------------------------------------------------------

//12.Fix the code to welcome the boss

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

//  Answer: 

// let message;
// let lock ;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
//----------------------------------------------------------------------------------------------------------------------------------------------

// 13.Fix the code to welcome the boss

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// Answer:

// let message;
// let lock ;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);
//--------------------------------------------------------------------------------------------------------------------------------------------

//14. Change the code to print

// 3

// 2

// 1

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// ANswer:

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( i--);
// }
//-----------------------------------------------------------------------------------------------------------------------------------------

//15.Change the code to print 1 to 10 in 4 lines

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// Answer:

// for (let num = 1; num <= 10; num++) {
//     console.log(num);
//   }
//-------------------------------------------------------------------------------------------------------------------------------------------

//16.Change the code to print even numbers

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }

// Answer:

// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }
//--------------------------------------------------------------------------------------------------------------------------------------

//17.Change the code to print all the gifts

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// Amswer:

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }
//---------------------------------------------------------------------------------------------------------------------------------------------


//18.Fix the code to disarm the bomb.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// Answer:

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if (countdown == 0) {
//     console.log("Bomb disarmed");
//   }
// }
//------------------------------------------------------------------------------------------------------------------------------------------

//19.Whats the msg printed and why?

// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += "Hello";
// }
// console.log(msg);

//Answer:hi
//Explanation:
// if (lemein) { msg += "hi"; }: The condition lemein is evaluated. Since "0" is a non-empty string, it is considered truthy,
// so the code within the if block is executed. The string "hi" is appended to the value of msg, resulting in msg being "hi".

// if (lemeout) { msg += 'Hello'; }: The condition lemeout is evaluated. The numeric value 0 is considered falsy in JavaScript. 
// Therefore, the condition is not met, and the code within the if block is not executed.
//-------------------------------------------------------------------------------------------------------------------------------------------

//20. Whats the msg printed and why? Guess you answer before running it.

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

//Answer: This code gives an error due to invalid quotes for the variables

