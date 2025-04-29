const mongoose = require('mongoose');
const express = require('express');



// mongoose.connect('mongodb://127.0.0.1:27017', () => {
//     console.log('connected to mongodb server')
// });
const app = express();

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})