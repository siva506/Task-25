const person = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello();