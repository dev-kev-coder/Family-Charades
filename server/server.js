const express = require('express');
//  TODO: connect to mongodb
//  TODO: might need to implement cors to talk to react

const PORT = process.env.PORT || 5000;

const app = express();

// mount needed middleware to parse data from client
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  TODO: setup route paths for api endpoints


app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});