

//now with postgres
// const postgres = require('postgres')

// const sql = postgres({
//     host: '127.0.0.1',
//     database: 'postgres',
//     username: 'postgres',
//     port: 5432,
//     password: 'root'
// })

// async function getVersion() {
//     const result = await sql`select * from products`
//     console.log(result);
// }

// getVersion()






//with knex

const knex = require('knex')


// # Do not expose your Neon credentials to the browser
// using exteral database from neon service
// PGHOST='ep-gentle-violet-a5h6gyxe.us-east-2.aws.neon.tech'
// PGDATABASE='neondb'
// PGUSER='neondb_owner'
// PGPASSWORD='GmsWIFlp54DR'

const db = knex({
    client : 'pg',
    connection : {
        host : 'localhost',
        port : 5432,
        user: 'postgres',
        database: 'postgres',
        password: 'root'
    }
})

async function getVersion(params) {
    const result = await db.raw(
        // `select * from products where id = 2`
        `select id, name, price from products where id = ?`, [params]
        
    )
    console.log(result.rows);
}

getVersion(5)



// db('products')
// .orderBy('name')
// .select('price', 'name')
// .where({id: 2}) 
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))


// // insert single

// db('products')
// .insert({name: 'iCar', price: 1000}, ['id'])
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// // insert many

// db('products')
// .insert([
//     {name: 'oneplus', price: 100},
//     {name: 'xiomi', price: 120},
    
// ],['id']
// )
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// // update name

// db('products')
// .update({name: 'huwai'},['id'])
// .where ({id :3})
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))




