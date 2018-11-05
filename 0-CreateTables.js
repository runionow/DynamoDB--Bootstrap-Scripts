var AWS = require('aws-sdk');
AWS.config.update(
    {
        region:'us-east-2',
        accessKeyId: 'AKIAJIG5K43XXXXXXXEA',
        secretAccessKey: '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'
    });
var dynamodb = new AWS.DynamoDB();
var tablePrefix = "GMJS.";


function createJobTable() {
   
    var params = {
        TableName: tablePrefix + "Job",
        KeySchema: [
                {
                AttributeName: "CountryId", 
                KeyType: "HASH"
            }, 
                {
                AttributeName: "JobId", 
                KeyType: "RANGE"
            }
        ],
        AttributeDefinitions: [
            {
                AttributeName: "CountryId", 
                AttributeType: "S"
            }, 
                {
                AttributeName: "JobId", 
                AttributeType: "S"
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }        
    };
    var promise = dynamodb.createTable(params).promise();
    return promise;
}

function createUserTable() {
    var params = {
        TableName: tablePrefix+"User", 
        KeySchema: [
            {
                AttributeName: "UserId", 
                KeyType: "HASH"
            }
        ],
        AttributeDefinitions: [
            {
                AttributeName: "UserId", 
                AttributeType: "S"
            }
        ], 
        ProvisionedThroughput: {
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }        
    };
    var promise = dynamodb.createTable(params).promise();
    return promise;
}

function createJobApplicationTable() {
    var params = {
        TableName: tablePrefix+"JobApplication",
        KeySchema: [
            {
                AttributeName: "JobId", 
                KeyType: "HASH"
            }, 
                {
                AttributeName: "UserId", 
                KeyType: "RANGE"
            }
        ], 
        AttributeDefinitions: [
            {
                AttributeName: "JobId", 
                AttributeType: "S"
            }, 
                {
                AttributeName: "UserId", 
                AttributeType: "S"
            }
        ],         
        ProvisionedThroughput: {
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };
    var promise = dynamodb.createTable(params).promise();
    return promise;
}

function done() {
    console.log('Finished creating all three tables.');
}

createJobTable()
    .then(createUserTable)
    .then(createJobApplicationTable)
    .catch(function(err) {
        console.log(err, err.stack);
    })
    .then(done);

