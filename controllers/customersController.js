const db = require('../config/db.manager');

exports.getAllCustomers = function (req, res) {
    const customers = db.getCustomers().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        }); // send all the data
    });
};

exports.getCustomerById = function (req, res) {
    const { id } = req.params; // get id
    res.status(200).json({
        status: 'not implemented'
    });
};

exports.createCustomer = function (req, res) { // must select the body to be raw->JSON in Postman
    const { body } = req;// req.body (attribute)
    const { id } = req.params;// get (attribute)
    res.status(200).json({
        status: 'not implemented'
    });
};

exports.updateCustomerById = function (req, res) { // must select the body to be raw->JSON in Postman
    const { body } = req;// req.body (attribute)
    const { id } = req.params;// get id (attribute)
    res.status(200).json({
        status: 'not implemented'
    });
};

exports.deleteCustomerById = function (req, res) { // must select the body to be raw->JSON in Postman
    const { body } = req;// req.body (attribute)
    const { id } = req.params;// get id
    res.status(200).json({
        status: 'not implemented'
    });
};
