var cars = 
[
  "Saab", 
  "Volvo", 
  "BMW", 
  "Mercedes"
];
var cities = ["Baku", "Moscow", "New-York"];
var names = ["Hasan", "Samir", "Orkhan"];

var list = [cars, cities, names];

console.log(list);

for(var i = 0; i<list.length; i++)
{
  for(var j = 0; j < list[i].length; j++)
  {
    console.log(list[i][j]);
  }
}

for(var i = 0; i<3; i++)
{
  console.log(cars[i]);
}

for(var i = 0; i < cars.length; i++)
{
  console.log(cars[i]);
}

// for/in
for(var i in cars)
{
  console.log(cars[i]);
}


// for/of
for(var car of cars)
{
  console.log(car);
}

var person1 = 
{
  name: "Hasan",
  age: 23,
  profession: "Programmer",
  is_married: false
}

var person2 = 
{
  name: "Elchin",
  age: 52,
  profession: "Cooker",
  is_married: true
}

var person3 = 
{
  name: "Shurik",
  age: 34,
  profession: null,
  is_married: false,
  weight: 56
}

var persons = [person];












