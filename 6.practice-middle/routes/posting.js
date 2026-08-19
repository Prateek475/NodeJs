const express = require('express');
const router = express.Router();
const rootDir = require('../utils/rootdir');
const path = require('path');

router.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,'views','PostData.html'));
});

module.exports = router;