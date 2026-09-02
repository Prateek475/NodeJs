const mongoose = require("mongoose");

/**
 * id is the only field here for this db
 */

const favSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }
});
 
module.exports = mongoose.model("favourite",favSchema);