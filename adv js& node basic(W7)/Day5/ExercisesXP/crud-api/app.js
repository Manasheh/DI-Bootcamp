import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express()

const PORT = 5000;
app.listen(PORT, () => {
    console.log('port 5000 is listening');
})

app.get('/posts',async (rej, res) => {
    try {
        const data = await fetchPosts()
        res.json(data)
        console.log('Data fetch is successful');
    } catch (error) {
        console.log(error);
    }
})

















