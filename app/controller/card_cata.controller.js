const db = require("../model");
const CardData = db.card_data;
const Op = db.Sequelize.Op;

// Create and Save a new Card data
exports.create = (req, res) => {

    const cardData = new CardData({
        name: req.body.name,
        amount: req.body.amount,
        number: req.body.number,
        cvv: req.body.cvv,
        expMonth: req.body.expMonth,
        expYear: req.body.expYear,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
    });

    CardData.create(cardData, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};