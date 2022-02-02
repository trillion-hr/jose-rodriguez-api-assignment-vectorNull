# IP Address Management REST API
 
Create a simple IP Address Management REST API on top of any data store. It will include the ability to add IP Addresses by CIDR block and then either acquire or release IP addresses individually. Each IP address will have a status associated with it that is either “available” or “acquired”. 
 
The REST API must support four endpoint:
  * **Create IP addresses** - take in a CIDR block (e.g. 10.0.0.1/24) and add all IP addresses within that block to the data store with status “available”
  * **List IP addresses** - return all IP addresses in the system with their current status
  * **Acquire an IP** - set the status of a certain IP to “acquired”
  * **Release an IP** - set the status of a certain IP to “available”


## API Documentation:

https://documenter.getpostman.com/view/7914740/UVeCRTxC
## Notes
To test the API on localhost:

- Create a .env file in the root directory of the application

- In the .env file, add the following line of code (update USERNAME, PASSWORD, and DATABASE_NAME with the corresponding username, password, and database name provided by MongoDB Cloud in connection settings or use the URL provided by MongoDB Cloud when you initially set your connection settings for a new cluster.)

  `MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.cqliu.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority`

- Open a terminal and run the following command to install dependencies (makes sure you are in the directory that contains your package.json file).

  `sudo npm install` for Linux/MacOS

  `npm install` For Windows (must be Adminstrator)

- To start the server and connect to MongoDB, run:
  `npm start`


