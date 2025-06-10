
/*
Напишите класс SumStack, который имеет следующие свойства:

push - добавляет элемент в конец стек
pop - удаляет последний элемент из стека
sum - возвращает сумму элементов в стеке
stack - возвращает стек
*/

class SumStack {
    private _stack: number[] = []

    constructor(array: number[] = []) {
        this._stack = array
    }

    push(value: number) {
        this._stack.push(value)
    }

    pop() {
        return this._stack.pop()
    }

    // sum() {
    //     return this._stack.reduce((acc, val) => acc + val, 0)
    // } тк в коде ниже используется написал и геттер тоже, не знаю какой вариант ожидаешь

    get sum() {
        return this._stack.reduce((acc, val) => acc + val, 0)
    }

    get stack() {
        return [...this._stack]
    }
}

// Ниже код менять не нужно

const sumStack = new SumStack([1, 2, 3]);

sumStack.push(4);

sumStack.stack[0] = 10;

sumStack.push(5);

console.log(sumStack.stack, sumStack.sum); // Должно вывести: [ 1, 2, 3, 4, 5 ] 15
