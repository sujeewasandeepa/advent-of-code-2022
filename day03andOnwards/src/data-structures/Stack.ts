export class Stack <T> {
    private stack: T[];

    constructor() {
        this.stack = [];
    }

    insert(element: T): void {
        this.stack.push(element);
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    peek(): T | undefined {
        return this.stack[this.stack.length - 1];
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    size(): number {
        return this.stack.length;
    }

    clear(): void {
        this.stack = [];
    }

}
