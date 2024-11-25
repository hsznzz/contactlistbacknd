const Contact = require('../models/contact.model');

exports.addContact = (req, res) => {
    Contact.add(req.body, (err) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.send('Contact added');
        }
    });
};

exports.updateContact = (req, res) => {
    Contact.update(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.send('Contact updated');
        }
    });
};

exports.displayContacts = (req, res) => {
    Contact.display((err, results) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(results);
        }
    });
};

exports.deleteContact = (req, res) => {
    Contact.delete(req.params.id, (err) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.send('Contact deleted');
        }
    });
};
