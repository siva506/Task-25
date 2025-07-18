const students = [
  { 
    name: "Alice", 
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
      return this.age >= 18;
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
    }
  }
];

students[1].greet();
console.log(students[1].isAdult());  // true

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
