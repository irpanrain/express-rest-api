const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.get("/", contactController.getAllContacts);

router.get("/:contactId", contactController.getOneContact);

router.post("/", contactController.createNewContact);

router.patch("/:contactId", contactController.updateOneContact);

router.delete("/:contactId", contactController.deleteOneContact);

module.exports = router;