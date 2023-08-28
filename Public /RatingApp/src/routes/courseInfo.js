const courseRoutes = require('express').Router();
const courseData = require('../Data/courses.json');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

courseRoutes.use(bodyParser.urlencoded({extended:false}));
courseRoutes.use(bodyParser.json());


courseRoutes.get('/', (request, response) => {

    response.status(200);
    response.send(courseData);
});

module.exports = courseRoutes;