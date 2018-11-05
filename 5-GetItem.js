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
  "TableName": "GMJS.Job",
  "Key": {
     "CountryId": {
        "S": "1"
     },
     "JobId": {
        "S": "421744d9-abae-45b4-a9aa-431d919c6640"
     }
  },
  "ReturnConsumedCapacity": "TOTAL"
};

var promise = dynamodb.getItem(params).promise();

promise
  .then(print)
  .catch(print);
