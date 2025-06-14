
/* 
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    max - возвращает максимальное значение элемента
*/

console.clear();

class MaxStack {

    readonly _stack: number[] = [];
    readonly _maxStack: number[] = [];


    constructor(stack: number[]) {
        for (let item of stack) {
            this.push(item);
        };
    };

    get stack(): number[] {
        return [...this._stack];
    };

    get count(): number {
        return this._stack.length;
    }

    get max() {
        return this._maxStack[this._maxStack.length - 1];
    }

    push(value: number) {
        this._stack.push(value);
        if(this._maxStack.length === 0 || value >= this._maxStack[this._maxStack.length - 1]) {
            this._maxStack.push(value);
        };
    };

    pop() {
        if(this._stack.length === 0) {
            return undefined;
        }

        const popped = this._stack.pop();

        if(popped === this._maxStack[this._maxStack.length - 1]) {
            this._maxStack.pop();
        };

        return popped;
    };

}

const maxStack = new MaxStack([1, 3, 5]);
maxStack.push(4);

maxStack.stack[0] = 10;

maxStack.push(2);

console.log(maxStack.stack);

const count = maxStack.count;
for(let i = 0; i < count; i++) {
    console.log(`Max: ${maxStack.max}, Pop: ${maxStack.pop()}`);
}

/*
[ 1, 3, 5, 4, 2 ]
Max: 5, Pop: 2
Max: 5, Pop: 4
Max: 5, Pop: 5
Max: 3, Pop: 3
Max: 1, Pop: 1
*/
