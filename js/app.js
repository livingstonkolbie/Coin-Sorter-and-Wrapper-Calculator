// 200 of each coin

// Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.


// the computer knows how many pennies i have
// every 50 pennies gets a wrap
// i need the computer to 200/50 and see how many wraps the pennies need
// then i need it to tell me the remainder left over


let pennies = 1;
let nickels = 5;
let dimes = 10;
let quarters = 25;


let userPennies = prompt('How many pennies do you have?');
let userNickels = prompt('How many nickels do you have?');
let userDimes = prompt('How many dimes do you have?');
let userQuarters = prompt('How many quarters do you have?');



let penniesTotal = userPennies * 1;
let nickelsTotal = userNickels * 5;
let dimesTotal = userDimes * 10;
let quartersTotal = userQuarters * 25;


console.log(`this person gave ${userPennies} pennies, equaling ${penniesTotal}`);
console.log(`this person gave ${userNickels} nickels, equaling ${nickelsTotal}`);
console.log(`this person gave ${userDimes} dimess, equaling ${dimesTotal}`); 
console.log(`this person gave ${userQuarters} quarters, equaling ${quartersTotal}`); 


// the computer knows how many coins it has and what ammount of money it equals
// i need to make a formula for the computer to know how many of each coin can fit into a wrap

// all coins have separate wrappers
// i need the computer to know which wrapper to use for each coin
// array is on my mind... wrap = [pennies, nickels....] or something like that

let wrap = 1;

// if one pennieWrap is 50, how many wraps is for 200
// i need the program to add another wrap every 50 pennies
// make a for loop go through the pennies and at every 50, add a wrap to the total amount of wraps needed

for (let i = 1; i <= userPennies.length; i++) {
    if(userPennies % 50 === 0) {
        console.log('');
    }
}