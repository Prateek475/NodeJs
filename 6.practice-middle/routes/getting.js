const express = require('express');
const router = express.Router();
const rootDir = require('../utils/rootdir');
const path = require('path');

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','GetData.html'));
});


module.exports = router;