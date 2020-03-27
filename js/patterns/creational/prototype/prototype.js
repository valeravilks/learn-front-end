const car = {
    wheels: 4,

    init(){
        console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
    }
};

const carWidthOwner = Object.create(car, {
    owner: {
        value: 'Anton'
    }
});

console.log(carWidthOwner.__proto__ == car);
carWidthOwner.init();