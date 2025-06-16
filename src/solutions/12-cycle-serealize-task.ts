type Nullable<T> = T | null;

class User {
    private readonly _orders: Order[] = [];

    constructor(
        readonly name: string,
    ) {}

    addOrder(order: Order) {
        this._orders.push(order);

        order.owner = this;
    }
}

class Order {
    private readonly _products: Product[] = [];

    private _owner: Nullable<User> = null;

    set owner(owner: Nullable<User>) {
        this._owner = owner;

        for(const product of this._products) {
            product.owner = owner;
        }
    }

    addProduct(product: Product) {
        this._products.push(product);
        
        product.owner = this._owner;
        
    }
}

class Product {
    private _owner: Nullable<User> = null;

    set owner(owner: Nullable<User>) {
        this._owner = owner;
    }

    constructor(
        readonly name: string,
        readonly price: number,    
    ) {}
}


// Реализовать функцию, которая выводит все циклические зависимости в объекте

const user = new User("Alex");

const order1 = new Order();

const product1 = new Product("Product1", 10);
const product2 = new Product("Product2", 20);

order1.addProduct(product1);
order1.addProduct(product2);

user.addOrder(order1);

/*
<ref *1> User {
  name: 'Alex',
  _orders: [
    Order {
      _products: [
        Product {
          name: 'Product1',
          price: 10,
          _owner: [Circular *1],
          [owner]: [Setter]
        },
        Product {
          name: 'Product2',
          price: 20,
          _owner: [Circular *1],
          [owner]: [Setter]
        },
        [length]: 2
      ],
      _owner: [Circular *1],
      [owner]: [Setter]
    },
    [length]: 1
  ]
}
*/

// Доработать функцию так, чтобы обход не был рекурсивным...

function traverseObject(obj: any, callback: (key: string, value: any) => void) {
    if (obj === null || typeof obj !== 'object') return;

    const visited = new Map();
    const path: any[] = [];

    const stack = [obj];
  
    while (stack.length > 0) {
      const currentObj = stack.pop()!;
  
      for (const key in currentObj) {
        if (currentObj.hasOwnProperty(key)) {

          const value = currentObj[key];
          callback(key, value);

          const cycleIndex = path.indexOf(currentObj);
          if(path.includes(value)) {
            console.log(value)

            const pathToCycle = path.splice(path.indexOf(value)).map(item => item.constructor?.name).join(" -> ");

            console.log("--------")

            console.log(pathToCycle, "\n");

            console.log("-------");

            path.push(value)
            continue;
          }

          path.push(currentObj);
          visited.set(currentObj, true);
  
          if (typeof value === 'object' && value !== null) {
            stack.push(value);
          }
        }
      }
    }
  }

traverseObject(user, (key, value) => {
    console.log(`${key} - ${value.constructor.name}`);
})
