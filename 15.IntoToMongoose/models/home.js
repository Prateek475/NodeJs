const mongoose = require("mongoose");

/**
 * 
 *  this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;//these were the fields
    save()
    fetchAll()
    findById(homeId)
    delHome(homeId)
 * 
 */

const homeSchema = new mongoose.Schema({
  housename : {type: String,required : true},
  price : {type: Number,required : true},
  location: {type: String,required : true},
  rating : {type: Number,required : true},
  photourl : String,
  description : String
});

module.exports = mongoose.model("Home",homeSchema);

