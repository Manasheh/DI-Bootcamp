"use strict";
let employee1 = {
    name: 'John',
    age: 30,
    role: "Developer"
};
// Accessing properties
console.log(employee1['name']); // Outputs: John
console.log(employee1.name); // Outputs: John
// Adding a new property dynamically
employee1['email'] = 'aaa@gmail.com';
console.log(employee1['email']); // Outputs: aaa@gmail.com
// Dynamic property access
let prop = 'name';
console.log(employee1[prop]); // Outputs: John
// Iterating over object properties using for...in
for (let key in employee1) {
    console.log(key, employee1[key]);
}
// Iterating over object properties using Object.keys
Object.keys(employee1).forEach(key => {
    console.log(key, employee1[key]);
});
// Function to log specific employee property
const logEmployee = (employee, key) => {
    console.log(key, employee[key]);
};
// Using logEmployee function
logEmployee(employee1, 'name'); // Outputs: name John
logEmployee(employee1, 'email'); // Outputs: email aaa@gmail.com
let employee2 = {
    name: 'John',
    age: 30,
    role: "Developer"
};
for (let key in employee2) {
    // console.log(key, employee2[key as keyof NewEmployee]); 
}
//Generics
const strEcho = (arg) => arg; // only for string
const strEcho1 = (arg) => arg;
const strEchoGeneric = (arg) => arg; // for any type, <T> could be any letter
//to check the type if it is an object 
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj({ name: 'John' })); // true
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: 'John' })); // true
console.log(isObj(['name', 'John'])); // true
console.log(isObj(1));
const checkBool = (arg) => {
    return {
        value: arg,
        is: !!arg
    };
};
const hasId = (arg) => {
    return arg.id;
};
// hasId({id: 1, name: 'John'})
const userJson = `[
    [
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        },
        {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
        },
        {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
        }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
        }
        },
        {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
        }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
        }
        },
        {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
        }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
        }
        },
        {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
        }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
        }
        },
        {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
        }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
        }
        },
        {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
        }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
        }
        },
        {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
        }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
        }
        }
        ]
]`;
const users = JSON.parse(userJson); // Parse JSON into an array of arrays
const firstUser = users[0][0]; // Access the first user in the nested array
console.log(hasId(firstUser));
const getUserInfo = (users, key) => {
    return users.map(user => user[key]);
};
console.log(getUserInfo(users[0], 'name')); // Outputs: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]
const adminUser = {
    name: 'John',
    role: 'Admin',
    email: 'admin@admin.com',
    street: '123 Main St',
    city: 'New York'
};
const post = {
    title: 'Title',
    content: 'Content',
    // date: new Date()
};
const updatePost = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
console.log(updatePost(post, { title: 'New Title', content: 'New-content', author: 'John' })); // Outputs: { title: 'New Title', content: 'New-content' }
//require
const updatePostAllData = (post);
