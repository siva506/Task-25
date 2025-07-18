function Car(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Car.prototype.getDetails = function() {
  return `${this.brand} ${this.model}, ${this.year}`;
};

Car.prototype.honk = function() {
  console.log(`${this.brand} ${this.model} says: Honk! Honk!`);
};

const car1 = new Car("Toyota", "Corolla", 2020, 45000);
const car2 = new Car("Tesla", "Model 3", 2023);

car1.honk(); 
car2.honk(); 
