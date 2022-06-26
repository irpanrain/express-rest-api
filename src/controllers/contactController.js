const contactService = require("../services/contactService");

const getAllContacts = (req, res) => {
    const allContacts = contactService.getAllContacts();
    res.send({status: "OK", data: allContacts});
};

const getOneContact = (req, res) => {
    const {
      params: { contactId },
    } = req;
    if(!contactId) {
      return;
    }
    const contact = contactService.getOneContact(contactId);
    res.send({status: "OK", data: contact});
};

const createNewContact = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.phone ||
    !body.email
  ) {
    return;
  }

  const newContact = {
    name: body.name,
    phone: body.phone,
    email: body.email
  };
  
  const createdContact = contactService.createNewContact(newContact);
  
  res.status(201).send({ status: "OK", data: createdContact });
};

const updateOneContact = (req, res) => {
  const {
    body,
    params: {contactId},
  } = req;
  if(!contactId) {
    return;
  }

  const updateContact = contactService.updateOneContact(contactId, body);
  res.send({status: "OK", data: updateContact});
};

const deleteOneContact = (req, res) => {
  const {
    params: {contactId},
  } = req;

  if(!contactId) {
    return;
  }

  const deleteContact = contactService.deleteOneContact(contactId);
  res.status(204).send({status: "OK"});
};

module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
};