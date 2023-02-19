const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router
  .route('/')
  .get(customersController.getAllCustomers)
  .post(customersController.createCustomer);

router
  .route('/:id')
  .get(customersController.getCustomerById)
  .patch(customersController.updateCustomerById)
  .delete(customersController.deleteCustomerById);

module.exports = router;