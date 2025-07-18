let person = {
    name: "Manoj Sai",
    city: "Madanapalle"
};

function updateCity(personObject, newCity) {
    if (personObject.name === "Manoj Sai") {
        personObject.city = newCity;
        console.log(`City updated successfully to ${newCity}`);
    } else {
        console.log("Person not found.");
    }
}

updateCity(person, "Hyderabad");
console.log(person);
