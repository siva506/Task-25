const personMethods = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  isAdult() {
    return this.age >= 18;
  },
  setName(newName) {
    this.name = newName;
  },
  logProperties() {
    const entries = Object.entries(this).filter(([k, v]) => typeof v !== 'function');
    const formatted = entries.map(([k, v]) => `${k}: ${v}`).join(', ');
    console.log(formatted);
  }
};

function createStudent(name, age) {
  return Object.assign(Object.create(personMethods), { name, age });
}

const students = [
  createStudent("Alice", 20),
  createStudent("Bob", 22),
  createStudent("Charlie", 19)
];

students[0].logProperties();
students[1].greet();
students[2].setName("Chuck");
students[2].logProperties();
