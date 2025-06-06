
/* 
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    max - возвращает максимальное значение элемента
*/

console.clear();

class MaxStack {
    public stack: number[] = []
    public maxStack: number[] = []

    constructor(initialStack: number[] = []) {
        initialStack.forEach(el => this.push(el))
    }

    push(value: number) {
        this.stack.push(value)

        if(this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value)
        }
    }

    pop() {
        if (this.stack.length === 0) return undefined

        const popped = this.stack.pop()

        if(popped === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop()
        }

        return popped
    }

    max() {
        if(this.maxStack.length === 0) {
            return undefined
        }

        return this.maxStack[this.maxStack.length - 1]
    }
}

const maxStack = new MaxStack([1, 3, 5]);

maxStack.push(4);

// maxStack.stack[0] = 10;

maxStack.push(2);

console.log(maxStack.stack);

const count = maxStack.maxStack.length + 1;
for(let i = 0; i < count + 1; i++) {
    console.log(`Max: ${maxStack.max()}, Pop: ${maxStack.pop()}`);
}
/*
[ 1, 3, 5, 4, 2 ]
Max: 5, Pop: 2
Max: 5, Pop: 4
Max: 5, Pop: 5
Max: 3, Pop: 3
Max: 1, Pop: 1
*/
