# Client Management CLI

Command line interface for managing customers. Uses Mongoose, Commander.js and Inquirer.js.

### Version
1.0.0

## Usage
It is a tool which uses CLI to add/ update/ find/ remove a client into/from the Database.

### Installation

### Setting up DB
In the ```index.js``` file place your MongoDB URI.

### Install the dependencies

```sh
$ npm install
```

### Create Symlink

```sh
$ npm link
```

### Commands

List Customers (list or l)
```sh
$ cli-node list
```

Find Customers (find or f)
```sh
$ cli-node find [NAME]
```

Add Customer (add or a)
```sh
$ cli-node add
```

Update Customer (update or u)
```sh
$ cli-node update [_ID]
```

Remove Customer (remove or r)
```sh
$ cli-node remove [_ID]
```
