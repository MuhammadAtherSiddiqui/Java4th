//-----------CHAPTER NO # 09-11
//Q NO # 01

// var city = prompt("Enter a city name");

// if(city === "karachi"){
//     document.write("Welcome to City of Light");

// }

//Q NO # 02

// var gender=prompt("Enter a gender");

// if(gender === "Male"){
//     document.write("GOOD MORNING SIR!");
// }
// if(gender === "Female"){
//     document.write("GOOD MORNING MA'AM!");
// }else{
//     document.write("HAVE A NICE DAY");
// }

//Q NO # 03

// var color = prompt("Enter the color of road traffic signal");

// if(color === "red"){
//     document.write("Must Stop");
// }

// if(color === "yellow"){
//     document.write("Ready to move");
// }

// if(color === "green"){
//     document.write("Move now");
// }

//Q NO # 04

// var fule=prompt("Enter a remaining fule is car");

// if(fule <= 0.25){
//     document.write("Please refill the fuel in your car");
// }

//Q NO 05(a)

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//true

//Q NO 05(b)

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//false

//Q NO 05(c)

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// false

// if (c === 13) {
//     alert("condition 2 is true");
// }
//true

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// false

// if (c === 14) {
//     alert("condition 4 is true");
// }
// true

//Q NO 05(d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// true

//Q NO 05(e)

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// true

//Q NO # 06

// var sub1 = prompt("Enter Subject 1")
// var sub2 = prompt("Enter Subject 2")
// var sub3 = prompt("Enter Subject 3")
// var marks1 = +prompt("Enter Marks of " + sub1)
// var marks2 = +prompt("Enter Marks of " + sub2)
// var marks3 = +prompt("Enter Marks of " + sub3)
// var obtainedMarks = marks1 + marks2 + marks3
//  obtainedMarks = Number.parseInt(obtainedMarks)
// var totalMarks = 300
// var percentage = (obtainedMarks / totalMarks * 100)

// document.write("<h1>" + "MarkSheet" + "</h1>")
// document.write("Total Marks: " + totalMarks + "<br>")
// document.write("Marks Obtained: " + obtainedMarks + "<br>")
// document.write("Percentage: " + percentage + "%" + "<br>")
// if (percentage >= 80) {
//     document.write("Grade: " + "A+" + "<br>")
// }
// if (percentage >= 70 && percentage < 80) {
//     document.write("Grade: " + "A" + "<br>")
// }
// if (percentage >= 60 && percentage < 70) {
//     document.write("Grade: " + "B" + "<br>")
// }
// if (percentage >= 50 && percentage < 60) {
//     document.write("Grade: " + "C" + "<br>")
// }
// if (percentage < 50) {
//     document.write("Grade: " + "Fail" + "<br>")
// }
// if (percentage >= 80) {
//     document.write("Remarks: " + "Excellent" + "<br>")
// }
// if (percentage >= 70 && percentage < 80) {
//     document.write("Remarks: " + "Good")
// }
// if (percentage >= 60 && percentage < 70) {
//     document.write("Remarks: " + "You need to improve")
// }
// if (percentage >= 50 && percentage < 60) {
//     document.write("Remarks: " + "no tens")
// }
// if (percentage < 50) {
//     document.write("Remarks: " + "Beta parahi main dil lagao")
// }

//Q NO # 07

// var num = +prompt("Enter any number in the range of 1-10");
// var myNum = 10

// if(num === myNum){
//     document.write("Bingo! Correct answer.");
// }

// else if(++num === myNum){
//     document.write("Close enough to the correct answer.");
// }
// else if(num !== myNum){
//        document.write("In-correct answer");
// }

//Q NO # 08

// var num = +prompt("Enter your number");
// var myNum = num % 3

// if(myNum === 0){
//     document.write("Your number is divisible by 3")
// }
// else{
//     document.write("Your number is not divisible by 3")
// }

//Q NO # 09

//var num = prompt("Enter your number");
// var even = num % 2
// if(even === 0){
//     document.write("Your number is Even")
// }
// else{
//     document.write("Your number is Odd");
// }

//Q NO # 10

// var temp=prompt("Enter a temperature");

// if(temp >= 40){
//     document.write("It is too hot outside.");
// }
// else if(temp >=30 && temp <40){
//    document.write("The Weather today is Normal.");
// }
// else if(temp >=20 && temp <30){
//     document.write("Today’s Weather is cool.");
//  }
//  else if(temp >=10 && temp <20){
//     document.write("OMG! Today’s weather is so Cool.");
//  }
//  else if(temp >=1 && temp <10){
//     document.write("Today's is very cool.");
//  }else{
//     document.write("Freezes");
//  }

//Q NO # 11

// var num1 = +prompt("Enter first number");

// var num2 = +prompt("Enter second number");

// var opt = prompt("Enter Operator");

// if(opt == "+"){
//     document.write("Your addition is : " + (num1 + num2));
// }
// else if(opt == "-"){
//     document.write("Your subtraction is : " + (num1 - num2));
// }
// else if(opt == "*" ){
//     document.write("Your multiplication is : " + (num1 * num2));
// }
// else if(opt == "/" ){
//     document.write("Your divsion is : " + (num1 / num2));
// }
// else if(opt == "%"){
//     document.write("Your modulus is : " + (num1 % num2));
// }

//-----------CHAPTER NO # 12-13

//Q NO # 01

// var char =prompt("Enter a charater");

// var charcode= char.charCodeAt()

// if(charcode >=65 && charcode <=90){
//       alert("Capital");
// }
// if(charcode >=97 && charcode <=122){
//     alert("Small");
// }else{
//     alert("Not a character");
// }

//Q NO # 02

// var num1 = +prompt("Enter first number:");

// var num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//   document.write("The larger number is: "+num1);
// } else if (num2 > num1) {
//     document.write("The larger number is: "+num2);
// } else {
//   document.write("Both numbers "+num1+" and "+num2+" are equal.");
// }

//Q NO # 03

// var num = prompt("Enter a number:");

// if (num > 0) {
//   document.write(""+num+" is positive.");
// } else if (num < 0) {
//  document.write(""+num+" is negative.");
// } else {
//   document.write(""+num+" is zero.");
// }

//Q NO # 04

// var char=prompt("Enter a character");

// if(char === "a" || char === "A"|| char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U" ){
//     document.write(""+char+" is vowel.");
// }else{
//     document.write("Not a vowel ");
// }

//Q NO # 05

// var password = "siddiqui"

// var enterPass = prompt("Enter Your Password");

// if (enterPass === password) {
//     document.write("Correct! The password you entered matches the original password.")
// }else {
//     document.write("Incorrect Password!")
// }

//Q NO # 06

// var greeting;

// greeting = prompt("Enter a hour")

// if (greeting <= 18) {
//     document.write("Good day");
// } else {
//     document.write("Good evening");
// }

//Q NO # 07

// var time = +prompt("Enter Your time:")
// if (time == "1300") {
//     alert("1 pm")
// }else if (time == "1400") {
//     alert("2 pm")
// } else if (time == "1500") {
//     alert("3 pm")
// } else if (time == "1600") {
//     alert("4 pm")
// } else if (time == "1700") {
//     alert("5 pm")
// } else if (time == "1800") {
//     alert("6 pm")
// } else if (time == "1900") {
//     alert("7 Pm GOOD EVENING")
// } else if (time == "2000") {
//     alert("8 pm")
// } else if (time == "2100") {
//     alert("9 pm")
// } else if (time == "2200") {
//     alert("10 pm GOOD NIGHT")
// } else if (time == "2300") {
//     alert("11 pm")
// } else if (time == "2400") {
//     alert("12 am")
// } else {
//     alert("You Entered Wrong Time")
// }














