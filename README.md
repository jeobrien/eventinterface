# JS Calendar
---------------------------------

## Technologies Used

- [Angular](http://angularjs.org)
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Mongodb](https://www.mongodb.org)
- [Mongoose](http://mongoosejs.com)

## Requirements

- [Node 0.10.x](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.org/downloads)

## Development Process

### Step 0: Fork and clone the repository from GitHub

### Step 1: Installing Dependencies

Run the following in the command line, from within the repository:

```sh
npm install
```

[optional] For convenience with running the server:
```sh
npm install nodemon
```

### Step 2: Running Locally

Run the mongo database from the command line, in one tab:
```sh
mongod
```

Run the server in the other tab using node:

```sh
node server/server.js
```

[optional] run the server in nodemon instead (if installed) to automatically restart the server after changing files:

```sh
nodemon server/server.js
```

### Visiting the server

While node is running, visit the locally running server at [127.0.0.1:3000](127.0.0.1:3000)

