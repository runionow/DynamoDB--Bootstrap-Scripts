var AWS = require('aws-sdk');
AWS.config.update(
  {
      region:'us-east-2',
      accessKeyId: 'AKIAJIG5K43XXXXXXXEA',
      secretAccessKey: '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'
  });
var print = require('./lib/helpers').printPretty;
var dynamodb = new AWS.DynamoDB();

deleteItem()
  .then(print)
  .catch(print);

function deleteItem() {
  var params = {
    "TableName": "GMJS.User",
    "Key": {
      "UserId": {
        "S": "001"
      }
    },
    "ReturnConsumedCapacity": "TOTAL"
  };
  return dynamodb.deleteItem(params).promise();
}
