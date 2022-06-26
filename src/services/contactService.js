  const Contact = require("../database/Contact");
  const { v4: uuid } = require("uuid");

  const getAllContacts = () => {
    try {
      const allContact = Contact.getAllContacts();
      return allContact;
    } catch (error) {
      throw error;
    }
  };
  
  const getOneContact = (contactId) => {
    try {
      const contact = Contact.getOneContact(contactId);
      return contact;
    } catch (error) {
      throw(error);
    }
  };
  
  const createNewContact = (newContact) => {
    
    const contactToInsert = {
        id: uuid(),
        ...newContact,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
      const createdContact = Contact.createNewContact(contactToInsert);
      return createdContact;
    } catch (error) {
      throw error;
    }
  };
  
  const updateOneContact = (contactId, updateContact) => {
    try {
      const updatedContact = Contact.updateOneContact(contactId, updateContact);
      return updatedContact;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteOneContact = (contactId) => {
    try {
      return Contact.deleteOneContact(contactId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
  };