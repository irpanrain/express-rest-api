  const Contact = require("../database/Contact");
  const { v4: uuid } = require("uuid");

  const getAllContacts = () => {
    const allContact = Contact.getAllContacts();

    return allContact;
  };
  
  const getOneContact = () => {
    return;
  };
  
  const createNewContact = (newContact) => {
    
    const contactToInsert = {
        ...newContact,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    const createdContact = Contact.createNewContact(contactToInsert);
    return createdContact;
  };
  
  const updateOneContact = () => {
    return;
  };
  
  const deleteOneContact = () => {
    return;
  };
  
  module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
  };