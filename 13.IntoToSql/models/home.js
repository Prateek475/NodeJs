const db =  require('../utils/dbutil');

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
    if(edit) {
      return db.execute(
      `UPDATE homes 
       SET housename = ?, price = ?, location = ?, rating = ?, photourl = ?, description = ?
       WHERE id = ?`,
      [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.photourl,
        this.description,
        this.id
      ]
      );
    } else {
      return db.execute(`Insert into homes  (housename,price,location,rating,photourl,description) values (?,?,?,?,?,?)`,[this.houseName,this.price,this.location,this.rating,this.photourl,this.description]);
    }
  }

  static fetchAll() {
    return db.execute('Select* from homes');
  }

  static findById(homeId) {
    return db.execute('Select* from homes where id = ?',[homeId]);
  }

  static delHome(homeId) {
    return db.execute('Delete from homes where id = ?',[homeId]);
  }
  
}