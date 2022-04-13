//username is subject to change
let userName = 'Digi'
//console will print Hello + name or just Hello
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');
//questions the user wants to ask the 8 ball below:
let userQuestion = ''
//printing the users question
console.log(`Will ${userName} become a front end engineer?`);
//this will be our random number
const randomNumber = Math.floor(Math.random() * 8);
//creating eightball variable to equal random number from 0-7
let eightBall = '';
//now creating control flow and switch for eightball
switch(randomNumber) {
case 0: 
  console.log('It is certain')
  break;
case 1: 
  console.log('It is decidedly so')
  break;
case 2: 
  console.log('Reply hazy try again')
  break;
case 3: 
  console.log('Cannot predict now')
  break;
case 4: 
  console.log('Do not count on it')
  break;
case 5: 
  console.log('My sources say no')
  break;
case 6: 
  console.log('Outlook not so good')
  break;
case 7: 
  console.log('Signs point to yes')
  break;
}

console.log('eightBall')