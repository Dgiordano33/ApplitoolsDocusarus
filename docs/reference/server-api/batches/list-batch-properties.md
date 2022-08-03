# List Batch Properties
Lists the properties names and values of all (or by name) the properties in a batch.

## Request
```
GET /batches/{batchId}/properties?BatchId=<string>[&name=<string>]
```
### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| batchId   | string | query  | The Batch's ID or Pointer ID.
| name      | string | query  | *Optional* The property name.


## Response Example
```json
{
 "properties": [
    {
      "name": "aa",
      "value": "vv"
    },
    {
      "name": "ff",
      "value": "dd"
    }
  ]
}
```

## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches/<some-batch-id>/properties"
```