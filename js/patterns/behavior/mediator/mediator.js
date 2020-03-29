class User{
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
     constructor() {
        this.users = {}
     }

     register(user) {
         this.users[user.name] = user;
         user.room = this;
     }

     send(message, from, to) {
         if(to) {
             to.receive(message, from)
         } else {
             Object.keys(this.users).forEach(key => {
                 if(this.users[key] !== from) {
                     this.users[key].receive(message, from)
                 }
             })
         }
     }
}

const Anton = new User('Anton');
const Elena = new User('Elena');
const Igor = new User('Igor');

const room = new ChatRoom();

room.register(Anton);
room.register(Elena);
room.register(Igor);

Anton.send('Hello!', Elena);
Elena.send('Hello!', Anton);
Igor.send('Hello all!');
