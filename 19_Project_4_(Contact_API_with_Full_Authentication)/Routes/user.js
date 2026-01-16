import express from "express";
import { register, login } from "../Controllers/user.js";

const router = express.Router();

//! user Register:-
// @api dsc:- user register
// @api method:- post
// @api endpoint:- /api/user/register
router.post("/register", register);

//! user Login:-
// @api dsc:- user login
// @api method:- post
// @api endpoint:- /api/user/login
router.post("/login", login);

export default router;
