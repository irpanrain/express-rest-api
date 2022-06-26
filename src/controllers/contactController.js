const contactService = require("../services/contactService");

const getAllContacts = (req, res) => {
    const allContacts = contactService.getAllContacts();
    res.send({status: "OK", data: allContacts});
};

const getOneContact = (req, res) => {
    const contact = contactService.getOneContact();
    res.send("Get an existing contact");
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
    const updateContact = contactService.updateOneContact();
    res.send("Update an existing contact");
};

const deleteOneContact = (req, res) => {
    const deleteContact = contactService.deleteOneContact();
    res.send("Delete an existing contact");
};

module.exports = {
    getAllContacts,
    getOneContact,
    createNewContact,
    updateOneContact,
    deleteOneContact,
};