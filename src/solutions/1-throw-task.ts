
async function functionThrow() {
    throw new Error("Function dont throw!");
}

// Есть код с ошибкой:
async () => {
    while (true) {
        console.log("Код с ошибкой")
        await functionThrow();
    }
};

// В чём особенности обработки ошибок каждого из вариантов и какой у них будет вывод?

// 1 вариант:
try {

    (async () => {
        while (true) {
            await functionThrow();
        }
    })();

} catch (error) {
    console.log("1", error);
}

/*
в 1 варианте блок try не дожидается окончания промисса и в блок catch не передается ошибка
*/

// 2 вариант:

(async () => {

    try {

        while (true) {
            await functionThrow();
        }

    } catch (error) {
        console.log("2", error);
    }

})();

/*
Во 2 варианте происходит 1 иттерация, после чего ошибка передается в catch и на этом заканчивается выполнение цикла
*/

// 3 вариант:

(async () => {
    while (true) {

        try {
            await functionThrow();
        } catch (error) {
            console.log("3", error);
        }

    }
})();

/*
В 3 варианте на каждой иттерации будет вылетать ошибка, тк конструкция try catch находится внутри цикла
*/