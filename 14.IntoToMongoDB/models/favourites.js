const { ObjectId } = require('mongodb');
const {getDb} =  require('../utils/dbutil');

module.exports = class Favourites {

  static addToFavourite(id) {
    const db = getDb();
    return db.collection("favourites").findOne({homeId : new ObjectId(String(id))})
    .then(existingFav => {
      if(existingFav) {
        console.log("This house is already favourited!!!");
        return;
      }
      return db.collection("favourites").insertOne({
        homeId : new ObjectId(String(id))
      });
    });
  }

  static getFavourites() {
    const db = getDb();
    return db.collection("favourites")
      .find().toArray();
  } 

  static delFavourites(homeId) {
    const db = getDb();
    return db.collection("favourites")
      .deleteOne({homeId : new ObjectId(String(homeId))});
  }
}