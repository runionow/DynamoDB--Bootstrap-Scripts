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
  "TableName": "GMJS.JobApplication",
  "KeyConditionExpression": "JobId = :jobid",
  "ExpressionAttributeValues": {
    ":jobid": { S: "162ded53-638b-444b-90a6-88c33328b4f5" }
  },
  "ReturnConsumedCapacity": "TOTAL"  
};

dynamodb
  .query(params).promise()
  .then(print)
  .catch(print);
