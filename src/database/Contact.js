const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllContacts = () => {
  return DB.contacts;
};

const getOneContact = (contactId) => {
    const contact = DB.contacts.find((contact) => contact.id === contactId);
    if (!contact) {
        return;
    }
    return contact;
}

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

const updateOneContact = (contactId, updateContact) => {
    const indexForUpdate = DB.contacts.findIndex((contact) => contact.id === contactId);
    if (indexForUpdate === -1) {
        return;
    }

    const updatedContact = {
        ...DB.contacts[indexForUpdate],
        ...updateContact,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
    };

    DB.contacts[indexForUpdate] = updatedContact;
    saveToDatabase(DB);
    return updatedContact;
}

const deleteOneContact = (contactId) => {
    const indexForDelete = DB.contacts.findIndex((contact) => contact.id === contactId);

    if (indexForDelete === -1) {
        return;
    }

    DB.contacts.splice(indexForDelete, 1);
    saveToDatabase(DB);
}


module.exports = { 
    getAllContacts, 
    getOneContact, 
    createNewContact, 
    updateOneContact, 
    deleteOneContact 
};