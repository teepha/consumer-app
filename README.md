# Consumer APP Microservice
Consumer APP service is a microservice that listens to queued messages and save them to the database.

## Table of Contents
1. <a href="#tech-used">Technologies Used</a>
2. <a href="#features">Features</a>
3. <a href="#usage">Usage</a>
4. <a href="#license">License</a>


## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Babel](https://babeljs.io) 
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Bull](https://www.npmjs.com/package/bull)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://www.npmjs.com/package/mongoose)

## Features

* Listens to the queue, take messages from it and adds it to the database.

## Usage

From the command line:

```bash
# Clone this repository
$ git clone https://github.com/teepha/consumer-app.git

# Navigate into the cloned repository folder
$ cd consumer-app

# Configuration
$ copy the content of .env.sample into a new file .env and provide all the required variables

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## License

ISC

---
