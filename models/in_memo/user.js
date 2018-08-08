const users = []

class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.age = age
        this.lastname = lastname
    }
    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    static insert(firstname, lastname, age) {
        const u = new User(firstname, lastname, age)
        User.users.push(u)
        return u
    }

    static getOneByName(firstname, lastname) {
        return User.users.find(u => u.firstname === firstname && u.lastname === lastname)
    }

    static list(query) {
        return User.users
    }

    static get ['users'] () {
        return users
    }
}


module.exports = User