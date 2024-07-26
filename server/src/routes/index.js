const express = require("express");
const router = express.Router();

///load all routes from other routes files
router.use("/auth", require("./auth_routes"));

module.exports = router;