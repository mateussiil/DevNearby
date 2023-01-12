# Dev Nearby

Dev Nearby is an app to find the nearest developer

This application uses Mongoose, a MongoDB object modeling tool, to interact with a MongoDB database. In order to use this application, you will need to have a MongoDB database set up and accessible.


## Table of Contents

- Prerequisites
- Installation
- Getting Started
- Usage
- Deployment
- Contributing
- License
- Mongoose Docs


## Prerequisites
- Node.js v12+
- MongoDB v4+

## Installation
Clone this repository: git clone https://github.com/mateussiil/DevNearby.git

Navigate to the project directory: cd backend

Install dependencies:

```
npm install
```

or

```
yarn
```

Create a .env file in the root of the project and set your MongoDB connection string as MONGODB_URL=mongodb://localhost:27017/your-database-name

Start the application: 

```
npm start
```

or

```
yarn start
```

## Usage
Once the application is running, you can use the endpoints provided by the application to interact with the MongoDB database. Refer to the documentation for information on the available endpoints and their usage.

## Deployment
To deploy this application to a production environment, you will need to set up a MongoDB instance that is accessible from the production environment. You should also consider setting up security and monitoring for the MongoDB instance.

You can deploy the Node.js application on different hosting providers or container orchestration services like Heroku, AWS, GCP, and many others.

You might also want to configure a process manager like pm2 or use a tool like Docker to ensure that the application is running in a stable and reliable manner.

## Contributing
If you would like to contribute to this project, please follow the contributing guidelines.

## License
This project is licensed under the MIT License.

## Mongoose Docs
For more information on using Mongoose, please refer to the [Mongoose Official documentation