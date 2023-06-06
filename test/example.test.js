const functions = require("../index");

test("Example", async () => {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test("Phone Number", async () => {
  const expected = "(123) 456-7890";
  const result = functions.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  expect(result).toBe(expected);
});

test("Phone Number", async () => {
  const expected = "(506) 876-1543";
  const result = functions.createPhoneNumber([5, 0, 6, 8, 7, 6, 1, 5, 4, 3]);
  expect(result).toBe(expected);
});

test("Object to Array", async () => {
  const expected = [["a", 1], ["b", 2]];
  const result = functions.createArray({ a: 1, b: 2 });
  expect(result).toEqual(expected); //to Equal es para comparar los objetos
});

test("Object to Array", async () => {
  const expected = [["m", 2], ["l", 4]];
  const result = functions.createArray({ m: 2, l: 4 });
  expect(result).toEqual(expected); //to Equal es para comparar los objetos
});


test("Grocery total", async () => {
  const expected = 4;
  const result = functions.getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },{ product: "Cereals", quantity: 1, price: 2.50 }]);
  expect(result).toBe(expected); 
});

test("Get days", async () => {
  const expected = 6;
  const result = functions.getDays(new Date("June 14, 2019"),  new Date("June 20, 2019"));
  expect(result).toBe(expected); 
});

test("Get repetidos", async () => {
  const expected = { 0: 6, 5: 3, 12: 2, 1: 1 };
  const result = functions.countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]);
  expect(result).toEqual(expected); 
});
