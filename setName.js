const students = [
  { 
    name: "Alice", 
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
      return this.age >= 18;
    },
    setName(newName) {
      this.name = newName;
    }
  },
  { 
    name: "Bob", 
    age: 22,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
      return this.age >= 18;
    },
    setName(newName) {
      this.name = newName;
    }
  },
  { 
    name: "Charlie", 
    age: 19,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
      return this.age >= 18;
    },
    setName(newName) {
      this.name = newName;
    }
  }
];

students[0].greet();
students[0].setName("Alicia");
students[0].greet();
