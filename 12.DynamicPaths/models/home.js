const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');


// fake database
let regHomes = [];

module.exports = class Home {
  constructor(houseName,price,location,rating,photourl) {
    this.id = Math.random().toString(); 
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
  }

  save(edit) {
    if(!edit) {
      regHomes.push(this);
    } else {
      const index = regHomes.findIndex(home => home.id == this.id);
      if(index !== -1) {
        regHomes[index] = this;
      }
    }
    const filePath = path.join(rootDir,'data','home.json');
    fs.writeFile(filePath,JSON.stringify(regHomes),(err) => {
      console.log(err);  
    });
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

  static findById(homeId,callback) {
    this.fetchAll(regHomes => {
      let foundHome = null;
      regHomes.forEach(home => {
        if(home.id === homeId) {
          foundHome = home;
        }
      });
      return callback(foundHome);
    })
  }

  static delHome(homeId) {
    regHomes = regHomes.filter(home => home.id !== homeId);
    const filePath = path.join(rootDir,'data','home.json');
    fs.writeFile(filePath,JSON.stringify(regHomes),(err) => {
      console.log(err);  
    });
  }
  
}