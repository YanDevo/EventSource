const express = require('express')
const bodyParser = require('body-parser');
const { Console } = require('console');

const PORT = 3000

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from server');
} );

app.listen(PORT, () => {
    console.log('Server runnig on localhost' + PORT);
})  