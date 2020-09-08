export default class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    printInfo() {
        console.log(`name = ${this.name} age = ${this.age}`);
    }
}
