const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllContacts = () => {
  return DB.contacts;
};

const createNewContact = (newContact) => {
    const isAlreadyAdded =
        DB.contacts.findIndex((workout) => workout.name === newContact.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.contacts.push(newContact);
    saveToDatabase(DB);
    return newContact;
};
module.exports = { getAllContacts, createNewContact, };