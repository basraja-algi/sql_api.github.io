const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index');

app.use('/', index);

app.listen(7000, () => {
    console.log(`nodejs server is running at port 7000`);
});