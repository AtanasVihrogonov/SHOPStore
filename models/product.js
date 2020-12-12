const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // store data
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    // get existing array of products
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return products;
  }
};
