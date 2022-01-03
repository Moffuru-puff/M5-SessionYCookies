let fs = require('fs');
const path = require('path');




module.exports = {
    
    datas: JSON.parse(fs.readFileSync(path.join(__dirname, "../db/users.json"), "utf-8")),
    writeDatasJSON: (dataB) => {
        fs.writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(dataB), "utf-8")
    }
}