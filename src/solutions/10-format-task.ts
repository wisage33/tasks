
class Ref {
    constructor(readonly id: number) {}
}

class User {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly productsId: number[]
    ) {}
}

class Product {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly price: number,
    ) {}
} 

const users = [
    new User(1, 'user1', [1, 2]),
    new User(2, 'user2', [3, 4]),
    new User(3, 'user3', [5, 6]),
];

const products = [
    new Product(1, 'product1', 100),
    new Product(2, 'product2', 200),
    new Product(3, 'product3', 300),    
    new Product(4, 'product4', 400),
    new Product(5, 'product5', 500),
    new Product(6, 'product6', 600), 
];

function References() {
    const productsArray = new Map(products.map(product => [product.id, product]))

    return users.map((user: User) => {
        const refs: Ref[] = user.productsId.map((id: number) => new Ref(id))

        const userProducts = refs
            .map(ref => productsArray.get(ref.id))
            .filter(product => product !== undefined)

        return {
            user,
            products: userProducts
        }
    })
}
// Требуется написать функцию, которая возвращает новый массив, выполняя агрегацию, в котором вместо id продуктов будут сами продукты: