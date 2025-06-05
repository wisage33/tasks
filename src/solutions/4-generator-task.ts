
class BigData {
    readonly data: number[] = Array(99999);

    [Symbol.iterator]() {
        let index = 0;
        let max = this.data;

        return {
            next: () => {
                if (index < max.length) {
                    return { value: this.data[index++], done: false};
                } else {
                    return { value: null, done: true};
                }
            }
        }
    }

    private *generator(): Generator<number> {
        for(const item of this.data) {
            yield item;
        }
    }

    getNext(): IteratorResult<number, number> {
        let iterator = this.generator();
        return iterator.next();
    }
}

const bigData = new BigData();
// Реализуйте данный механизм с использованием итератора и генератора
// for(const items of bigData) {
//     console.log(items);
// }
let i = 0;

console.log(bigData.getNext())