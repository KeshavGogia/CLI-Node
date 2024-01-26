#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const{
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');


//Customer Questions 
const question = [
    {
        type : 'input',
        name : 'firstname',
        message : 'Customer First Name : '
    },
    {
        type : 'input',
        name : 'lastname',
        message : 'Customer Last Name : '
    },
    {
        type : 'input',
        name : 'phone',
        message : 'Customer Phone No. : '
    },
    {
        type : 'input',
        name : 'email',
        message : 'Customer Email : '
    }
]

program
    .version('1.0.0')
    .description("Client Management System")

// Add command
program
.command('add')
.alias('a')
.description('Add a Customer')
.action(() => {
    prompt(question).then(answers => addCustomer(answers));
});

// Find command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name =>{findCustomer(name)});

// Update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a Customer')
    .action((_id) => {
        prompt(question).then(answers => updateCustomer(_id,answers));
});

// Remove command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id =>{removeCustomer(_id)});


// Listall command
program
    .command('list ')
    .alias('l')
    .description('List all customers')
    .action(() =>{listCustomer()});


program.parse(process.argv);