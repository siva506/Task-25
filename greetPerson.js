const students = [
  { 
    name: "Alice", 
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  },
  { 
    name: "Bob", 
    age: 22,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  },
  { 
    name: "Charlie", 
    age: 19,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
];

students[1].greet();
