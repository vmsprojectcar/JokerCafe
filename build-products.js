const fs = require('fs');
const path = require('path');


const productsFolder = path.join(__dirname, 'content', 'products');
const outputFile = path.join(__dirname, 'static', 'products.json');


const files = fs.readdirSync(productsFolder).filter(f => f.endsWith('.json'));


const productsArray = files.map(file => {
const data = fs.readFileSync(path.join(productsFolder, file));
return JSON.parse(data);
});


fs.writeFileSync(outputFile, JSON.stringify(productsArray, null, 2));
console.log(`Created ${outputFile} with ${productsArray.length} products.`);
