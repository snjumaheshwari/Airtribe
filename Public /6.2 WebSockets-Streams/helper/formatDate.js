const moment = require('moment');

function formatMessgage(username, text){
    return{
        username, text, time: moment().format('h:mm a')
    };
}

module.exports = formatMessgage;