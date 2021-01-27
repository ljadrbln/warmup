const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use( cors({origin: 'http://localhost:8000'}) )

app.post('/', (req, res) => {
    let a = [1, {a: 2}, "b"];
    res.json(a);
})

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})