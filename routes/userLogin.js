const express = require("express");
const router = express.Router();

const userLoginController = require("../controllers/userLogin");

router.get("/", userLoginController.index);
router.post("/login", userLoginController.login);
router.post("/register", userLoginController.register);
router.put("/:id", userLoginController.edit);
router.delete("/:id", userLoginController.delete);

module.exports = router;
