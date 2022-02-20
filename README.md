# Brainfuck Language Interpreter

## Usage
1. Clone the repository or download a release.
2. Install dependencies (```npm install```).
3. Use ```npm run start``` to run the interpreter.

You will be prompted to provide the path to your BF source code.


## Notes
* This interpreters implements the BFN model.
* The memory is virtual, as in simulated.
* The memory size is dynamic, new cells being generated on demand.
* Moving left below zero warps the pointer to the maximum allocated position.
