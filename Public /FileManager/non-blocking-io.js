
const fs = require("fs");
function moreWork(){
    console.log("More work is being done !!");
}
fs.readFile('./input.txt', {encoding:'utf-8', flag: 'r'}, (err, data) => {

    console.log(data);
});

moreWork();