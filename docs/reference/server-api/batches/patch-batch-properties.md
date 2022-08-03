# Patch Batch Properties
Patches the properties names and values in a batch. This allows you to update batch properties after the batchInfo object has been passed to Eyes.

## Request
```
PATCH /batches/{batchId}/properties  
```
### Parameters

| Name      | Type                    | In             | Description
| --------- | ----------------------- | ------ | ------------------
| BatchId   | string                  | query  | The Batch's ID or Pointer ID.
| property  | Property&lt;string&gt;[] | query  | *Optional* The properties names and values.


## Response Example
200


## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -H 'Content-Type: application/json' -X PATCH "https://eyes.applitools.com/api/v1/batches/<some-batch-id>/properties" --data-raw '{
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
}'
```