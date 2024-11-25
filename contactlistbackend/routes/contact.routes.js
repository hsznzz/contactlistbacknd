const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.post('/', contactController.addContact);
router.put('/:id', contactController.updateContact);
router.get('/', contactController.displayContacts);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
