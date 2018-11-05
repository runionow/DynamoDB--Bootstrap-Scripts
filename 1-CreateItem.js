var AWS = require('aws-sdk');
AWS.config.update(
  {
      region:'us-east-2',
      accessKeyId: 'AKIAJIG5K43XXXXXXXEA',
      secretAccessKey: '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'
  });
var print = require('./lib/helpers').printPretty;
var dynamodb = new AWS.DynamoDB();

var params = {
  "TableName": "GMJS.User",
  "Item": {
    "UserId": { "S": "001" },
    "FirstName": { "S": "Arun" },
    "LastName": { "S": "Nekkalapudi" }
  },
  "ReturnConsumedCapacity": "TOTAL"
};

/*
var params = {
  "TableName": "GMJS.User",
  "Item": {
    "UserId": { "S": "001" },
    "FirstName": { "S": "Arun" },
    "NoOfLogins": { "N": "0" }
  },
  "ReturnConsumedCapacity": "TOTAL"
};
*/

// Creates a new item or replaces an old item with a new item.
var promise = dynamodb.putItem(params).promise();

promise
  .then(print)
  .catch(print);
