const express = require('express');

const expressGraphQl = require('express-graphql');

const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}));


app.listen(4000, () => {

    console.log("Server is running on port 4000");
})