/*
    Дан массив чисел. Найдите два числа, сумма которых равна заданному числу. Как оптимизировать решение?
*/

console.clear();

function doubleSum(array: number[], sum: number) {

    const seen = new Set()
    const result = new Set()

    for(const num of array) {
        const complement = sum - num
        console.log(`${sum} - ${num} = ${complement}`)

        if(seen.has(complement)) {
            console.log(seen)
            const pair = [num, complement].sort().join(", ")
            result.add(pair)
        }

        seen.add(num)
    }

    return result
}

const result = doubleSum([1, 4, -1, 9, 1, 6, 7, 10, 8], 9);

console.log(result); // [-1, 10]

// минимум вложенных циклов, хотя начинал с них, минимальное количество итттераций за счет проверки на наличие числа в сетте seen