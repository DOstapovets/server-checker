const http = require('axios');


module.exports.isUrlAvailable = async function(){
    try {
        await http.get(url);
        return true;
    } catch (error) {
       return false
    }
}