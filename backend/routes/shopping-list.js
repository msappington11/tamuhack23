const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Shopping List");
});

module.exports = router;