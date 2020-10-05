var fs = require('fs');

const readData = fs.readFile('./text.txt', (err, data) => {
    if(!err) {
        console.log(data.toString())
    }
}) 

fs.writeFile('./text.txt', 'How did you change that?', (err) => {
    readData
})

// replace text with another - if error run previous text