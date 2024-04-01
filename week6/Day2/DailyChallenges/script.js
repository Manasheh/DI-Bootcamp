// Go wildcats 

// const gameInfo = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
//    ];

//    const names = []
//    gameInfo.forEach((name) => {
//         names.push(`${name.username}!`)
//    })
//    console.log(names);

//    const usernames = []
//    gameInfo.forEach((name) => {
//     if (name.score > 5) {
//         usernames.push(name.username)
//     }
//    })
//    console.log(usernames)

// let sum = 0
// gameInfo.forEach((name) => {
//     sum += name.score
//  })
//  console.log(sum);


// car inventory 


// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ];

// function getCarHonda(arr) {
//     const hondaCar = arr.find((item) => item.car_make == 'Honda')
//     const sentence = `This is a ${hondaCar.car_make} ${hondaCar.car_model} ${hondaCar.car_year}`
//     console.log(hondaCar);
//     console.log(sentence);
// }

// console.log(getCarHonda(inventory))

// function sortCarInventoryByYear(carInventory) {
//     return carInventory.sort((a, b) => a.car_year < b.car_year ? -1 : 1)
// }
// sortCarInventoryByYear(inventory)
 