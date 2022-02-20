import * as readline from 'readline';
import { Instructions } from './enums/instructions.enum';
import { MemorySet } from './models/memory-set.model';

export class Interpreter
{
    memory: MemorySet;

    private _controlStack: number[] = [];

    constructor() {
        this.memory = new MemorySet();
    }

    /**
     * Read a value into the memory.
     */
    async read(): Promise<void> {
        this.memory.current = await new Promise<number>((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('Read value: ', (input) => {
                rl.close();
                resolve(parseInt(input));
            });
        });
    }

    /**
     * Run the interpreter.
     */
    async interpret(input: string) {
        const instructions = input.split('').map(i => i as Instructions);
        for (let index = 0; index < instructions.length; index++) {
            const instruction = instructions[index];
            switch (instruction) {
                case Instructions.Read:
                    await this.read();
                    break;

                case Instructions.Write:
                    console.log(this.memory.current);
                    break;

                case Instructions.Increase:
                    this.memory.current = this.memory.current + 1;
                    break;

                case Instructions.Decrease:
                    this.memory.current = this.memory.current - 1;
                    break;

                case Instructions.MoveLeft:
                    this.memory.pointer -= 1;
                    break;

                case Instructions.MoveRight:
                    this.memory.pointer += 1;
                    break;

                default:
                    console.error(`Unknown instruction: '${instruction}'!`);
                    break;
            }
        }
    }
}
