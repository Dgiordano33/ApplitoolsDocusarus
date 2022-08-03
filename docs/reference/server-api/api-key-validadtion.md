# API Key Validation
Returns information associated with the API key. This allows you to confirm that the API key used in your tests is valid.

## Request
```
GET /auth/api-key-validation
```
### Parameters
No parameters, just a `X-Eyes-Api-Key` header.

## Response Example
```json
{
    "teamId": "_DqJA1qB2UWzA8Hzpfcrgg__",
    "user": "some.one@applitools.com",
    "permissions": [
        "read",
        "write",
        "execute",
        "merge"
    ],
    "createdBy": "some.one@applitools.com",
    "purpose": "",
    "expiresAt": "2023-01-19T23:59:59.0000000+02:00"
}
```

## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/auth/api-key-validation" 
```