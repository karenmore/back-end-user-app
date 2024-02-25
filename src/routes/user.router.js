const { getAll, create, remove, update, getOne } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/users")
		.get(getAll)
        .post(create);


usersRouter.route("/users/:id")
        .delete(remove)
        .put(update)
        .get(getOne)

module.exports = usersRouter;