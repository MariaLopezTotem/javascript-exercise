const http = require('http');
const _ = require('lodash');

const initServer = () => {
  http
  .createServer(function (req, res) {
    //Here We add the calls for the functions
    const suma = add(5, 6);
    const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const objToArray = createArray({ a: 1, b: 2 });
    const groceryTotal = getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Cereals", quantity: 1, price: 2.50 }
    ]);
    const days = getDays(new Date("June 14, 2019"),new Date("June 20, 2019"));
    const arrayrepeated = countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]);
    res.write(`Example: \n add 5 + 6 = ${suma}\n\n`);
    res.write(`Phone number:\n ${phoneNumber}\n\n`)
    res.write(`Object to Array:\n ${objToArray}\n\n`)
    res.write(`Grocery toltal:\n ${groceryTotal}\n\n`)
    res.write(`Get cantidad de dias:\n ${days}\n\n`)
    res.write(`Get repetidos:\n ${arrayrepeated}\n\n`)

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
};

function add(a, b){
  return a + b;
}

initServer();

module.exports = { add, createPhoneNumber, createArray, getTotalPrice, getDays, countRepetitions};

/**
 * Create a phone number from an array
 */
function createPhoneNumber(array){
  const message = "formato del arreglo no valido"
  if(_.isEqual(array.length, 10)){//necesito validar que el arreglo contenga 10 elementos
    const number = array.join("");
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`   
  }
  return message;
}

/**
 * Write a function that converts an object into an array,
 * where each element represents a key-value pair in the form of an array.
 */

function createArray(obj){
  return Object.entries(obj)//funcion de caja que toma el objeto y lo hace en matriz de arreglos
}

/**
 * Create a function that takes two dates and
 * returns the number of days between the first and second date.
 */

function getDays(date1, date2){
  let diferencia = date2 - date1;
  cantDias = Math.floor(diferencia/(1000 * 60 * 60 * 24)); //cantidad de milisegundos en un dia 
  return cantDias;

}

/**
 * Create a function that takes an array of objects (groceries)
 * which calculates the total price and returns it as a number.
 * A grocery object has a product, a quantity and a price
 */  
function getTotalPrice(groceries){
  let totalPrice = 0;
  groceries.forEach(product => {
    totalPrice += product.price;
  })
  return totalPrice;
//[{ product: "Milk", quantity: 1, price: 1.50 },{ product: "Cereals", quantity: 1, price: 2.50 }]
}

/**
 * Create a function named that takes a string (URL) as input.
 * Decompose the string and return an object with the following properties:
 * - protocol: This is the url protocol (e.g. "http").
 * - ipAdress: Should contain IP address (if valid) of URL or null.
 * - subDomain: Should contain subDomain of URL (e.g. "www" or null).
 * - domainName: Should contain domain without subDomain (e.g. "google.com" or null).
 * - folderTree: Should contain an array of folders (e.g. "www.google.com/test/image/index.html" ➞ ["test", "image"] or null)
 * - targetFile: Should return targeted file.
 *      e.g. 1. "www.google.com/test/image" ➞ "image"
 *      e.g. 2. "www.google.com/test/index.html" ➞ "index.html" or null
 * - argumentsFile: Should return arguments of targetedFile.
 *      e.g. "www.google.com/test/image?search=ok" ➞ "?search=ok" or null
 */
//decomposeUrl("https://www.google.com/search/test.js?ok=1")
// => returns {
//   protocol: "https",
//   ipAdress: null,
//   subDomain: "www",
//   domainName: "google.com",
//   folderTree: (1) […],
//   targetFile: "test.js",
//   argumentsFile: "?ok=1"
// }

function decomposeUrl(url){
 
}

/**
 * Given an array, create a function that returns an object detailing
 * how many times each element was repeated. Sort the object by value in descending order.
 */
function countRepetitions(array){
  let repeated = {}; //obj para almacenar los repetidos
  array.forEach(element =>{
    let current = element; 
    if(_.isEqual(repeated[current], undefined)){//ha sido encontrado el elemento antes?
      repeated[current] = 1;
    }else{
      repeated[current]++;
    }
  })
  return repeated;
}