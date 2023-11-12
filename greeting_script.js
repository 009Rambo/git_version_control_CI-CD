const express = require('express');
const readline = require('readline');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your name: ', (userName) => {
        rl.question('Enter your age: ', (userAge) => {
            userAge = parseInt(userAge);
            if (!isNaN(userAge)) {
                
                // Generate a personalized greeting message based on age
                const greetingMessage = (userAge < 18)
                    ? Hello, ${userName}! You're young!
                    : Hello, ${userName}! Welcome to the script.;

                // Send the greeting as the HTTP response
                res.send(greetingMessage);
            } else {
                res.send('Invalid age. Please enter a valid number.');
            }

            rl.close();
        });
    });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});