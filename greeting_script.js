// Simple Greeting Script in Node.js

const readline = require('readline');

function greetUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your name: ', (userName) => {
        console.log(`Hello, ${userName}! Welcome to the simple greeting script.`);
        rl.close();
    });
}

function main() {
    // Call the greetUser function
    greetUser();
}

// Run the main function if the script is executed
if (require.main === module) {
    main();
}
