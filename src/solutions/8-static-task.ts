
// Сделать рабочим - поправить ошибки ниже:

class Country {
    constructor(readonly name: string, readonly code: number) {}

    static parseCountry(country: { name: string, code: number } ) {
        return new Country(country.name, country.code);
    }
}

class User {
    constructor(
        readonly name: string,
        readonly age: number,
        readonly country: Country,
    ) {}

    static fromObject(obj: { name: string, age: number, country: {name: string, code: number}}): User {
        const country = Country.parseCountry(obj.country)
        return new User(obj.name, obj.age, country);
    }
}

// Не нужно менять:
const user = User.fromObject({
    name: "Artem",
    age: 24,
    country: {
        name: "Russia",
        code: 643
    }
});