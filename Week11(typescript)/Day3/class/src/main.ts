interface EmployeeInterface {
    name: string;
    age: number;
    role: string;
    [key: string]: string | number; 
}

let employee1: EmployeeInterface = {
    name: 'John',
    age: 30,
    role: "Developer"
};

// Accessing properties
console.log(employee1['name']); // Outputs: John
console.log(employee1.name);    // Outputs: John

// Adding a new property dynamically
employee1['email'] = 'aaa@gmail.com';
console.log(employee1['email']); // Outputs: aaa@gmail.com

// Dynamic property access
let prop: string = 'name';
console.log(employee1[prop as keyof EmployeeInterface]); // Outputs: John

// Iterating over object properties using for...in
for (let key in employee1) {
    console.log(key, employee1[key as keyof EmployeeInterface]);
}

// Iterating over object properties using Object.keys
Object.keys(employee1).forEach(key => {
    console.log(key, employee1[key as keyof EmployeeInterface]);
});

// Function to log specific employee property
const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface) => {
    console.log(key, employee[key as keyof EmployeeInterface]);
};

// Using logEmployee function
logEmployee(employee1, 'name'); // Outputs: name John
logEmployee(employee1, 'email'); // Outputs: email aaa@gmail.com


// Record type <T, U>

// interface EmployeeInterface {       
//     name: string;
//     age: number;
//     role: string;
// }

// OR 

type name = 'name' | 'age' | 'role';
type NewEmployee = Record<name, string | number>;

let employee2: NewEmployee = {      
    name: 'John',
    age: 30,
    role: "Developer"
};  

for (let key in employee2) {
    // console.log(key, employee2[key as keyof NewEmployee]); 
}



//Generics

const strEcho = (arg: string): string => arg; // only for string
const strEcho1 = (arg: any): any => arg; 
const strEchoGeneric = <T>(arg: T): T => arg; // for any type, <T> could be any letter

//to check the type if it is an object 
const isObj = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
}
console.log(isObj({name: 'John'})); // true
console.log(isObj([1, 2, 3])); // false

console.log(isObj({name: 'John'})); // true
console.log(isObj(['name', 'John'])); // true
console.log(isObj(1));


// eg 

interface BoolCheck<T> {
    value: T;
    is: boolean;
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
    return {
        value: arg,
        is: !!arg
    }
}

interface HasId {
    id: number;
}

const hasId = <T extends HasId>(arg: T): number => {
    return arg.id;
}


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
]`

const users: any[][] = JSON.parse(userJson); // Parse JSON into an array of arrays
const firstUser = users[0][0]; // Access the first user in the nested array

console.log(hasId(firstUser));


const getUserInfo = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}

console.log(getUserInfo(users[0], 'name')); // Outputs: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]



//generic class

// class StateObj<T> {
//     private _state: T;
//     constructor(initialState: T) {
//         this._state = initialState;
//     }
//     get state(): T {
//         return this._state;
//     }

//     set state(newState: T) {
//         this._state = newState;
//     }
// }

// const username = new StateObj<string>('John');
// console.log(username.state); // Outputs: John
// username.state = 'Doe';



type Admin = {
    name: string;
    role: string;
}

type User = {
    email: string;
}

type Address = {
    street: string;
    city: string;
}

type AdminUser = Admin & User & Address;    // Intersection type

const adminUser: AdminUser = {  
    name: 'John',
    role: 'Admin',
    email: 'admin@admin.com',
    street: '123 Main St',  
    city: 'New York'        
};




//utility type


// interface Post {
//     title: string;
//     content: string;
//     date: Date
// }

// const post: Partial<Post> = {    // Partial utility type
//     title: 'Title',
//     content: 'Content',
//     // date: new Date()
// };


interface Post {
    title: string;
    content: string;
    author?: string;
}

const post: Post = {    // Partial utility type
    title: 'Title',
    content: 'Content',
    // date: new Date()
    
};

const updatePost = (post: Post, update: Partial<Post>): Post => {
    return { ...post, ...update };
}

console.log(updatePost(post, { title: 'New Title', content: 'New-content', author: 'John' })); // Outputs: { title: 'New Title', content: 'New-content' }


//require
const postwithauthor = updatePost(post, {author: 'John'})

const updatePostAllData = (post: Required <Post>, update: Partial<Post>): Post => {
    return { ...post, update}
}

// console.log(postwithauthor(post, {author: 'John'}))


//utitlities

//exclude
type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type Pass = Exclude<Grade, 'F'>; // Exclude utility type

//extract

type Failed = Extract<Grade, 'F'>; // Extract utility type

//NonNullable utility type
type Nullable = string | null | undefined;
type NonNull = NonNullable<Nullable>; // NonNullable utility type

//ReturnType utility type

const createUser = (name: string, age: number) => {
   return (name + age);
}

type userReturnType = ReturnType<typeof createUser>; // ReturnType utility type

const usernew: userReturnType = createUser('John', 30);


// enviroment variable 
// CLOUDINARY_URL=cloudinary:164462651467536:GwJLM4_Z1JklQCqtveTy6Agsf4g@djv4t6uxo

// https://res.cloudinary.com/djv4t6uxo/image/upload/e_cartoonify/v1716385719/cld-sample.jpg

https://res.cloudinary.com/djv4t6uxo/image/upload/e_cartoonify/a_20/v1716385719/cld-sample.jpg

https://res.cloudinary.com/djv4t6uxo/image/upload/e_cartoonify/bo_10px_solid_yellow/v1716385719/cld-sample.jpg