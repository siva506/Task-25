function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getDetails = function() {
  return `${this.brand} ${this.model}, ${this.year}`;
};

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Tesla", "Model 3", 2023);

console.log(car1.getDetails());
console.log(car2.getDetails()); 
