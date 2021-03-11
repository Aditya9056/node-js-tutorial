class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    gret(){
        console.log(`My name is ${this.name} and I am happy`);
    }
}

console.log(__filename);

module.exports = Person;