const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection successful!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})