  const Contact = require("../database/Contact");
  const { v4: uuid } = require("uuid");

  const getAllContacts = () => {
    const allContact = Contact.getAllContacts();

    return allContact;
  };
  
  const getOneContact = (contactId) => {
    const contact = Contact.getOneContact(contactId);
    return contact;
  };
  
  const createNewContact = (newContact) => {
    
    const contactToInsert = {
        id: uuid(),
        ...newContact,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    const createdContact = Contact.createNewContact(contactToInsert);
    return createdContact;
  };
  
  const updateOneContact = (contactId, updateContact) => {
    const updatedContact = Contact.updateOneContact(contactId, updateContact);
    return updatedContact;
  };
  
  const deleteOneContact = (contactId) => {
    return Contact.deleteOneContact(contactId);
  };
  
  module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
  };