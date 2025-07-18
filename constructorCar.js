function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Tesla", "Model 3", 2023);

console.log(car1);
console.log(car2);
