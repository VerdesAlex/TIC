const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use((req, res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
})

let items = [
    {
        id:1, name: 'Laptop', price: 6000
    },
    {
        id:2, name: 'Nigger', price: 300
    },
    {
        id:3, name: 'Phone', price: 2949
    }
]

let nextId= 4;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json(items)
})

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}}`)
})