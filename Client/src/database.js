const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error(err);
  }
}

async function disconnect() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connect,
  disconnect,
  client,
};
