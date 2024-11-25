const fs = require("fs");
const file_path = "hello.txt";
let data
try {
    data = fs.readFileSync(file_path, 'utf-8');
    console.log(data)
} catch (err) {
    console.error(err)
}

data += "\nNew text!";

try {
    fs.writeFileSync(file_path, data)
} catch (err) {
    console.error(err)
}


fs.readFile(file_path, 'utf-8',(err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data)
});
