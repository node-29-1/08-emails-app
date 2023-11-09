const { getAll, createEmail, sendContactEmail } = require('../controllers/email.controllers');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route('/')
    .get(getAll)
    .post(createEmail)

emailRouter.route('/contact')
    .post(sendContactEmail)

module.exports = emailRouter;
