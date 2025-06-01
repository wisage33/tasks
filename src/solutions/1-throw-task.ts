
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

// 3 вариант:

// (async () => {
//     while (true) {

//         try {
//             await functionThrow();
//         } catch (error) {
//             console.log("3", error);
//         }

//     }
// })();
