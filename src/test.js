class User {
    constructor(name){
        this.name = name;
    }

     talk() {
        console.log("Hii its me " + this.name);
    }
}

const u1 = new User("Golu");
const u2 = new User("Boi");

u1.talk();
u2.talk();
