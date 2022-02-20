import { MemoryCell } from './memory-cell.model';

export class MemorySet {
    memory: MemoryCell[] = [];

    private _pointer = 0;

    /**
     * Get the value at the current location of the pointer.
     */
    get current() {
        return (this.memory[this._pointer]?.value ?? 0);
    }

    /**
     * Write a value at the current location of the pointer.
     *
     * @param value
     */
    set current(value: number) {
        while (this.memory.length <= this._pointer) {
            this.memory.push(new MemoryCell());
        }

        this.memory[this._pointer].value = value;
    }
}
