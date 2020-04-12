const express = require("express")
const router = express.Router()

//@router GET api/contacts
//@desc Get all user contacts
//@access Private
router.get("/", (req, res) => {
	res.send("Get all contact")
})

//@router POST api/contacts
//@desc Add new contact
//@access Private
router.post("/", (req, res) => {
	res.send("Add contact")
})

//@router PUT api/contacts/:id
//@desc Updaate contact
//@access Private
router.put("/", (req, res) => {
	res.send("Update contact")
})

//@router DELETE api/contacts/:id
//@desc Delete contact
//@access Private
router.delete("/", (req, res) => {
	res.send("Delete contact")
})

module.exports = router
