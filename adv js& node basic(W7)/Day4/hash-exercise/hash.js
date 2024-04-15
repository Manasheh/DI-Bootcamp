/*
1. Create a module file `hash.js`
2. A function that get a paswword as parameter 
and return a hash paswarod.
3. Use `bcrypt` from NPM.
4. app.js use the `hash.js` 
*/
// const bcrypt = require('bcrypt') 
import bcrypt from 'bcrypt'


export const hash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + '', salt)
    return hash
}

export const hello =() => {
    return 'hellooo'
}
// module.exports = {hash} 

export default hash
