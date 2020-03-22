// declaration and initialisation
let id = Symbol("id");
let person = {
    // variables
    [id] : 1,
    _name : 'Tim',
    _age : 7,

    // get-set
    //  getters
    getName() {
        return this._name;
    },

    getAge() {
        return this._age;
    },

    //  setters
    setName(name) {
        this._name = name;
    },

    setAge(age) {
        this._age = age;
    },

    // methods
    print() {
        console.log(`naam: ${this._name} leeftijd: ${this._age}`);
    }
};

// main
person.print();
console.log(person.getName());
person.setAge(30);
person.print();
console.log();
console.log();

for (let item in person) {
    console.log(`${item} is ${person[item]}`);
}

console.log();
console.log();

for (let item in person) { // keyword of werkt niet wanneer je wilt loopen over de items van een object!
    console.log(item);
}