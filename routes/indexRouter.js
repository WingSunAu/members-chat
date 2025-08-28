const { Router } = require("express");
const passport = require("passport");
const { createUserPost, createUserGet } = require("../controllers/sign-up");
const { getMessages } = require("../controllers/home");
const { readUserGet, readUserPost } = require("../controllers/log-in");
const { updateMemberGet, updateMemberPost } = require("../controllers/join-club");
const { createMessageGet, createMessagePost } = require("../controllers/new-message");

const indexRouter = Router();

indexRouter.get("/", (req, res) => getMessages(req, res));
indexRouter.get("/sign-up", (req, res) => createUserGet(req, res));
indexRouter.post("/sign-up", async (req, res, next) => createUserPost(req, res));
indexRouter.get("/log-in", (req, res) => readUserGet(req, res));
indexRouter.post("/log-in", passport.authenticate('local'), async (req, res, next) => readUserPost(req, res));
indexRouter.get("/join-club", (req, res) => updateMemberGet(req, res));
indexRouter.post("/join-club", async (req, res, next) => updateMemberPost(req, res));
indexRouter.get("/new-message", (req, res) => createMessageGet(req, res));
indexRouter.post("/new-message", async (req, res, next) => createMessagePost(req, res));
module.exports = indexRouter;