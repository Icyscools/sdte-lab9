const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Another test before destory !!'))

app.listen(port, "0.0.0.0", () => console.log(`Web app listening on port ${port}!`))

