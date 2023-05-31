const MongoClient = require('mongodb').MongoClient;
const db = 'mongodb://localhost:27017/latestdb'

async function getEmpData() {
    let client = await MongoClient.connect(db);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;