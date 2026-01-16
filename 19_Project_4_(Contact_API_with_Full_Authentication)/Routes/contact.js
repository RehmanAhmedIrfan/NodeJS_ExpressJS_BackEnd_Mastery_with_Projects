import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/Auth.js";
isAuthenticated;

const router = express.Router();

//! get all contact:-
// @api dsc:- fetching all contact
// @api method:- get
// @api endpoint:- /api/contact/
router.get("/", getAllContact);

//! new contact:-
// @api dsc:- creating contact
// @api method:- post
// @api endpoint:- /api/contact/new
router.post("/new", isAuthenticated, newContact);

//!get contact by id:-
// @api dsc:- getting contact by id
// @api method:- get
// @api endpoint:- /api/contact/:id
router.get("/:id", getContactById);

//!update contact by id:-
// @api dsc:- updating contact by id
// @api method:- put
// @api endpoint:- /api/contact/:id
router.put("/:id", isAuthenticated, updateContactById);

//!delete contact by id:-
// @api dsc:- deleting contact by id
// @api method:- delete
// @api endpoint:- /api/contact/:id
router.delete("/:id", isAuthenticated, deleteContactById);

//! get user specific Contacts:
// @api dsc:- getting contact by user id
// @api method:- get
// @api endpoint:- /api/contact/userid/:id
router.get("/userid/:id", getContactByUserId);

export default router;
