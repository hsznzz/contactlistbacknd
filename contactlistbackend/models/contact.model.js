const db = require('../config/db.config');

const Contact = {
    add: (data, callback) => {
        const query = 'INSERT INTO contact_list (last_name, first_name, email_address, contact_number) VALUES (?, ?, ?, ?)';
        db.query(query, [data.last_name, data.first_name, data.email_address, data.contact_number], callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE contact_list SET last_name = ?, first_name = ?, email_address = ?, contact_number = ? WHERE id = ?';
        db.query(query, [data.last_name, data.first_name, data.email_address, data.contact_number, id], callback);
    },
    display: (callback) => {
        const query = 'SELECT * FROM contact_list';
        db.query(query, callback);
    },
    delete: (id, callback) => {
        const query = 'UPDATE contact_list SET is_deleted = 1 WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Contact;
