// const { products } = require('../../server/config/data')
const blogPosts = require('./data')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// console.log(blogPosts);

const port = 5000

app.listen(port, () => {
    console.log('run on 5000');
})
// app.get('/', (req, res) => {
//     res.send('welcome to port 5000')
// })
app.get('/posts', (req, res) => {
    res.json(blogPosts)
})

// app.get('/posts/:id', (req, res) => {
//     const {id} = req.params
//     const post = blogPosts.find((item) => item.id == id)
//     if(!post) {
//         return res.status(404).json({error: 'blog not found'})
//     }
//     res.status(200).json(post)
// })

app.post('/posts', (req, res) => {
    // console.log(req.body); 
    blogPosts.push(req.body)
    res.json(blogPosts)
})

app.put('/posts/:id', (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    const index = blogPosts.findIndex(item => item.id == id)
    if (index === -1) {
        res.status(404).json({message: 'blog not found'})
    }
    blogPosts[index] = {
        ...blogPosts[index],
        title, content
    }
    res.json(blogPosts)
})

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params
    const post = blogPosts.findIndex((item) => item.id == id) 
    if (post === -1) {
        res.status(404).json({msg: 'Item not found'})
    }
    blogPosts.splice(post, 1) 
    res.json(blogPosts)
})
