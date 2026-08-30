const { ObjectId } = require('mongodb');
const {getDb} =  require('../utils/dbutil');

module.exports = class Home {
  constructor(houseName,price,location,rating,photourl,description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
    this.description = description;
  }

  save(edit) {
    const db = getDb();
    if(edit) {
      const {id, ...homeData} = this;
      db.collection("homes").
      updateOne(
        {_id : new ObjectId(String(this.id))},
        { $set : homeData}
      );
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("homes")
      .find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection("homes")
      .find({_id : new ObjectId(String(homeId))}).next();
  }

  static delHome(homeId) {
    const db = getDb();
    return db.collection("homes")
      .deleteOne({_id : new ObjectId(String(homeId))});
  }
  
}