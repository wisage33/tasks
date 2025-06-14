
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

    public *generator(): Generator<number> {
        for(const item of this.data) {
            yield item;
        }
    }
}

const bigData = new BigData();
// Реализуйте данный механизм с использованием итератора и генератора
// for(const items of bigData) {
//     console.log(items);
// }

console.log(bigData.generator())