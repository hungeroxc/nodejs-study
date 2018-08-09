const users = []

class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.age = age
        this.lastname = lastname
        User.id += 1
        this.id = User.id
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

    static getOneById(userId) {
        return User.users.find(u => u.id === userId)
    }

    static list(query) {
        return User.users
    }

    static get ['users'] () {
        return users
    }
}

User.id = 0


module.exports = User