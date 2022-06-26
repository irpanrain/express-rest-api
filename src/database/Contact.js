const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllContacts = () => {
    try {
        return DB.contacts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getOneContact = (contactId) => {
    try {
        const contact = DB.contacts.find((contact) => contact.id === contactId);
        if (!contact) {
            throw {
                status: 400,
                message: `Can't find contact with the id '${contactId}'`
            }
        }
        return contact;
    } catch (error) {
        throw { status: 500, message: error.message ? error.message : error};
    }
}

const createNewContact = (newContact) => {
    const isAlreadyAdded =
        DB.contacts.findIndex((contact) => contact.name === newContact.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Contact with the name '${newContact.name}' already exist`
        }
    }

    try {
        DB.contacts.push(newContact);
        saveToDatabase(DB);
        return newContact;   
    } catch (error) {
        throw { status: error.status ? error.status : 500, message: error.message ? error.message : error };
    }
};

const updateOneContact = (contactId, updateContact) => {
    try {
        const indexForUpdate = DB.contacts.findIndex((contact) => contact.id === contactId);
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find contact with the id ${contactId}`,
            }
        }
        const isAlreadyAdded = DB.contacts.findIndex((contact) => contact.name === updateContact.name > -1);
        if(isAlreadyAdded) {
            throw {
                status: 400,
                message: `Contact with the name '${updateContact.name}' already exist`,
            };
        }

        const updatedContact = {
            ...DB.contacts[indexForUpdate],
            ...updateContact,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
        };

        DB.contacts[indexForUpdate] = updatedContact;
        saveToDatabase(DB);
        return updatedContact;
    } catch (error) {
        throw { status: 500, message: error.message ? error.message : error};
    }
}

const deleteOneContact = (contactId) => {
    try {
        const indexForDelete = DB.contacts.findIndex((contact) => contact.id === contactId);
        if (indexForDelete === -1) {
            throw {
                status: 400,
                message: `Can't find contact with the id : '${contactId}'`,            }
        }
    
        DB.contacts.splice(indexForDelete, 1);
        saveToDatabase(DB);   
    } catch (error) {
        throw { status: error.status || 500, messsage: error.status ? error.status : 500 };
    }
}


module.exports = { 
    getAllContacts, 
    getOneContact, 
    createNewContact, 
    updateOneContact, 
    deleteOneContact 
};