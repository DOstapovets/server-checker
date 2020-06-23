
const { isUrlAvailable } = require( './services/http');

const URLS = ['https://google.com','https://gitlab.com','http://127.0.0.1:5500/']

const DB = {
    statuses:{
        
    }
}

async function main() {
    for (url of URLS) {
        DB.statuses[url] = {};
        DB.statuses[url] = await isUrlAvailable(url);
    }
    console.table(DB.statuses);
    
}


main()
setInterval(main,10000)