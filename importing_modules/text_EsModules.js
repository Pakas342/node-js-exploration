import {readFileSync, writeFileSync, readFile} from 'fs'
const file_path = "hello.txt";
let data
try {
    data = readFileSync(file_path, 'utf-8');
    console.log(data)
} catch (err) {
    console.error(err)
}

data += "\nNew text!";

try {
    writeFileSync(file_path, data)
} catch (err) {
    console.error(err)
}


readFile(file_path, 'utf-8',(err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data)
});
