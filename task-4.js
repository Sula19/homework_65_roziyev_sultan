let duck = {
    name: "Дональд",
    color: "белый",
    age: 1,
    toStr: function () {
        return console.log(`${this.name}, ${this.color}, ${this.age}`)
    },
    say: function () {
        return console.log('Кря кря')
    }
}

duck.toStr()
duck.say()