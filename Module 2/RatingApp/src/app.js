const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('express').Router();
const courseRoutes = require('/Routes/');


const app = express();
app.use(cors());
app.use(routes);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PORT = 3000;

routes.get('/',(request, response)=> {
    response.status(200).send("Welcome to airtribe course rating apps");
});

routes.use()

app.listen(PORT, (error) => {
    if(!error){
        console.log("[Successful] Server is running...");
    }
    else{
        console.log("[Error] ..Server fails to listen ..");
    }

});