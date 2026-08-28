const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

let fav = [];
const favDataPath = path.join(rootDir,'data','favourite.json');

module.exports = class Favourites {

  static addToFavourite(id,callback) {
    if(!fav.includes(id)) {
      fav.push(id);
      fs.writeFile(favDataPath,JSON.stringify(fav),callback);
    } else {
      console.log("Already included in favourites...");
      callback();
    }
  }

  static getFavourites(callback) {
    const fileContent = fs.readFile(favDataPath,(err,data) => {
      if (err) {
        console.log("Error reading favourites:", err);
        return callback([]);
      }
      if (data.length === 0) {
        return callback([]);
      }
      fav = JSON.parse(data);
      return callback(fav);
    });
  } 

  static delFavourites(homeId,callback) {
    Favourites.getFavourites((fav)=> {
      fav = fav.filter(id => id !== homeId);
      fs.writeFile(favDataPath,JSON.stringify(fav),callback);
    });
  }
}