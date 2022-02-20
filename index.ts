import * as fs from 'fs';
import * as readline from 'readline';
import { Interpreter } from './src/interpreter';

console.time('app_run');

const interpreter = new Interpreter();

new Promise<void>((resolve, reject) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('What file do you want to interpret?: ', (input) => {
        rl.close();
        fs.readFile(input, 'utf8', (error, data) => {
            if (error) {
                console.error('There was an error reading your file!');
            } else {
                interpreter.interpret(data).then(() => {
                    resolve();
                });
            }
        });
    });
}).then(() => {
    console.timeEnd('app_run');
})
