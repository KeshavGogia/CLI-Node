const mongoose = require('mongoose');

// Connecting to MongoDB
// Place your URI here :
const MongoURI = '';
mongoose.connect(MongoURI);

// Importing Model
const Customer = require('./model/customer');
const customer = require('./model/customer');

// Adding Customer
const addCustomer = async (customer) => {
    try {
        const newCustomer = await Customer.create(customer);
        console.info('New Customer Added:', newCustomer);
    } catch (error) {
        console.error('Error adding customer:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

// Find Customer
const findCustomer = async (name) => {
    try {
        // Making name case insensitive 
        const search = new RegExp(name, 'i'); // i for case insensitive flag

        // Finding name for search both in first and last name
        const customers = await Customer.find({ $or: [{ firstname: search }, { lastname: search }] });
        console.info(customers);
        console.info(`${customers.length} matches.`);
    } catch (error) {
        console.error('Error finding customer:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

// Updating Customer
const updateCustomer = async (_id, updatedCustomer) => {
    try {
        const result = await Customer.updateOne({ _id }, updatedCustomer);
        console.info('Customer Updated:', result);
    } catch (error) {
        console.error('Error updating customer:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

// Removing a Customer
const removeCustomer = async (_id) => {
    try {
        const result = await Customer.deleteOne({ _id });
        if (result.deletedCount === 1) {
            console.info('Customer Removed');
        } else {
            console.info('Customer not found');
        }
    } catch (error) {
        console.error('Error removing customer:', error.message);
    } finally {
        mongoose.connection.close();
    }
};


const listCustomer = async () => {
    try {
        const customers = await Customer.find();
        console.info(customers);
        console.info(`${customers.length} Customers`);
    } catch (error) {
        console.error('Error listing customers:', error.message);
    } finally {
        mongoose.connection.close();
    }
};


// Exporting all the methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
};
