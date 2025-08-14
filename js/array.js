// Array Methods

// toString  This method converts an array to a string of (comma seperated) array values
// const cars = ["BMW","Corolla","Camery","Lexus","Benz"];
// document.getElementById('demo').innerHTML = cars.toString()

// join  This method joins all array element into a string
// const fruits = ["Orange", "Apple", "Mango","Pinapple"];
// document.getElementById("demo").innerText = fruits.join(" + ")

// popt  This method removes the end element of an array
// const fruits = ["Orange", "Apple", "Mango","Pinapple"];
// fruits.pop();
// document.getElementById("demo1").innerHTML = fruits;

// Push  This method add new elements to the end of an array
// const cars = ["BMW","Corolla","Camery","Lexus","Benz"];
// cars.push("Kiwi")
// document.getElementById('demo1').innerHTML = cars

// Shift  This method removes the first element of an array
// const names = ["John","Doe","Mary","Peace","Thomas"];
// names.shift()
// document.getElementById("demo1").innerHTML = names;

// Unshift  This method add new elements to the beginning of an array
// const names = ["John","Doe","Mary","Peace","Thomas"];
// names.unshift("David")
// document.getElementById("demo1").innerHTML = names;


// Merging Array  This method creates a new array by merging exisitng array
// const cars = ["BMW","Corolla","Camery","Lexus","Benz"];
// const names = ["John","Doe","Mary","Peace","Thomas"];
// const owner = cars.concat(names)
// document.getElementById("demo1").innerHTML = owner;

// Splice array This methos can be used to add new items to an array and can also be used t remove elements without leavu=ing holes in the array
// const fruits = ["Orange", "Apple", "Mango","Pinapple"];
// fruits.splice(3,1, "Kiwi", "Pear")
// document.getElementById("demo1").innerText = fruits
const fruits = ["Orange", "Apple", "Mango","Pinapple"];
const citrus = fruits.slice(2)
document.getElementById("demo1").innerHTML =citrus