const db =  require('../utils/dbutil');

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
    
  }

  static fetchAll() {
    return db.execute('Select* from homes');
  }

  static findById(homeId,callback) {
    
  }

  static delHome(homeId) {
    
  }
  
}