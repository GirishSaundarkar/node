const mongoose = require('mongoose');
const app = require('./app');

const MONGO_URL = "mongodb://127.0.0.1:27017/myDatabase"

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection successful!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})