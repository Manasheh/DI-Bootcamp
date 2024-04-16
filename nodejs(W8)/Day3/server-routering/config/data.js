const knex = require('knex')
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env)
const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD,PGPORT} = process.env
const db = knex({
    client : 'pg',
    connection : {
        host : PGHOST,
        port : PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD
    }
})

const products = [
  { id: 102, name: "iPhone", price: 800 },
  { id: 132, name: "iPad", price: 650 },
  { id: 213, name: "iWatch", price: 750 },
];
const users = [
  { id: 102, name: "iPhone", price: 800 },
  { id: 132, name: "iPad", price: 650 },
  { id: 213, name: "iWatch", price: 750 },
];

module.exports = {
  products,
  db,
};
