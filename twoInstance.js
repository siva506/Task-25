class Student {
  constructor(name, roll, grade) {
    this.name = name;
    this.roll = roll;
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Roll: ${this.roll}, Grade: ${this.grade}`;
  }
}

const student1 = new Student("Alice", 101, "A");
const student2 = new Student("Bob", 102, "B");

console.log(student1.getDetails());
console.log(student2.getDetails());
