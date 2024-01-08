const fs = require('fs');

const result = [];
for (let i = 1; i <= 100; i++) {
    let currentNumber = '';
    if (i % 3 == 0) {
        currentNumber += "BIG";
    } 
    if (i % 5 == 0) {
        currentNumber += "BANG";
    }
    result.push(currentNumber || i.toString());
    
}
const jsonContent = JSON.stringify(result);
fs.writeFile("./output.json", jsonContent, 'utf8', function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

console.log(result);