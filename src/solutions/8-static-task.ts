
// Сделать рабочим - поправить ошибки ниже:

type CountryDTO = {name: string, code: number};
type UserDTO = {name: string, age: number, country: CountryDTO}

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

    static fromObject(obj: UserDTO): User {
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

console.log(user)