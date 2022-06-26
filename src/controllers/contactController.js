const contactService = require("../services/contactService");

const getAllContacts = (req, res) => {
    try {
      const allContacts = contactService.getAllContacts();
      res.send({status: "OK", data: allContacts});  
    } catch (error) {
      res
      .status(error.message ? error.message : 500)
      .send({status: "FAILED", data: {error: error.message ? error.message : error}});
    }
    
};

const getOneContact = (req, res) => {
    const {
      params: { contactId },
    } = req;
    if(!contactId) {
      res
      .status(400)
      .send({
        status: "FAILED",
        data: {error: "Parameter ':contactId' can not be empty"},
      })
      return;
    }

    try {
      const contact = contactService.getOneContact(contactId);
      res.send({status: "OK", data: contact}); 
    } catch (error) {
      res
      .status({error : error ? 500 : error})
      .send({
        status: "FAILED",
        data: {error: error.message ? error.message : error},
      });
    }
};

const createNewContact = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.phone ||
    !body.email
  ) {
    res
    .status(400)
    .send({
      status: "FAILED",
      data: { 
        error: "One of following keys is missing or is empty in request body: 'name', 'phoen', 'email'",
      },
    });
  }

  const newContact = {
    name: body.name,
    phone: body.phone,
    email: body.email
  };
  
  try {
    const createdContact = contactService.createNewContact(newContact);
    res.status(201).send({ status: "OK", data: createdContact });
  } catch (error) {
    res
    .status(error.status ? error.status : 500)
    .send({status: "FAILED", data: { error: error.message ? error.message : error } });
  }
};

const updateOneContact = (req, res) => {
  const {
    body,
    params: {contactId},
  } = req;
  if(!contactId) {
    res
    .status(400)
    .send({
      status: "FAILED",
      data: { error: "Parameter ':contactId' can't be empty"},
    });
  }

  try {
    const updateContact = contactService.updateOneContact(contactId, body);
    res.send({status: "OK", data: updateContact}); 
  } catch (error) {
    res
    .status(error.message ? 500 : error)
    .send({status: "FAILED", data: {error: error.message ? error.message : message} })
  }
};

const deleteOneContact = (req, res) => {
  const {
    params: {contactId},
  } = req;

  if(!contactId) {
      res.
      status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':contactId' can't not be empty"},
      })
  }

  try {
    const deleteContact = contactService.deleteOneContact(contactId);
    res.status(204).send({status: "OK"});
  } catch (error) {
    res
    .status(error.status ? error.status : 500)
    .send({ status: "FAILED", data: {error: error.message? error.message : error}});
  }
};

module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
};