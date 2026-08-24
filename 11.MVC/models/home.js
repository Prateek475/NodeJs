const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');


// fake database
let regHomes = [];

module.exports = class Home {
  constructor(houseName,price,location,rating,photourl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
  }

  save() {
    regHomes.push(this);
    const filePath = path.join(rootDir,'data','home.json');
    fs.writeFile(filePath,JSON.stringify(regHomes),(err) => {
      console.log(err);  
    })
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir,'data','home.json');
    const fileContent = fs.readFile(filePath,(err,data) => {
      if(!err) {
        regHomes = JSON.parse(data)
      }
      return callback(regHomes);
    });
  }
  
}