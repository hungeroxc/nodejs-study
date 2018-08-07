class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.age = age
        this.lastname = lastname
    }

    getName() {
        return `${this.firstname} ${this.lastname}`
    }
}

module.exports = User