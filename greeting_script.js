// Simple Greeting Script in Node.js

const readline = require('readline');

function greetUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your name: ', (userName) => {
        rl.question('Enter your age: ', (userAge) => {
            userAge = parseInt(userAge);
            if (!isNaN(userAge)) {
                // Print a personalized greeting message based on age
                if (userAge < 18) {
                    console.log(`Hello, ${userName}! You're young!`);
                } else {
                    console.log(`Hello, ${userName}! Welcome to the script.`);
                }
            } else {
                console.log('Invalid age. Please enter a valid number.');
            }
        rl.close();
    });
});
}

greetUser();
