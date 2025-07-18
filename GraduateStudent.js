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

class GraduateStudent extends Student {
  constructor(name, roll, grade, degree) {
    super(name, roll, grade);
    this.degree = degree;
  }

  getDegree() {
    return `Degree: ${this.degree}`;
  }
}

const gradStudent = new GraduateStudent("Dana", 301, "A", "MBA");
console.log(gradStudent.getDetails());
console.log(gradStudent.getDegree());
