## User Sign Up API

**Endpoint:**  
`POST /api/users/signup`

**Description:**  
Creates a new user account.

**Request Body:**
Send a JSON object with the following fields:

| Field        | Type   | Required | Description                                 |
|--------------|--------|----------|---------------------------------------------|
| firstName    | String | Yes      | User's first name                           |
| lastName     | String | Yes      | User's last name                            |
| phoneNumber  | String | Yes      | User's phone number (must be unique, min 11 chars) |
| email        | String | Yes      | User's email address (must be unique)        |
| password     | String | Yes      | User's password (min 6 chars)                |

**Example Request:**
```json
POST /api/users/signup
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "01234567890",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Success Response:**

- **Status:** `201 Created`
- **Body:**
```json
{
  "message": "User created successfully",
  "user": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "01234567890",
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "sockeId": null,
    "location": {
      "type": "Point",
      "coordinates": []
    },
    "__v": 0
  }
}
```

**Error Responses:**

- **400 Bad Request:** Missing or invalid fields.
- **409 Conflict:** Email or phone number already exists.
- **500 Internal Server Error:** Server error.

**Notes:**
- The `location` field is optional at sign up. If not provided, it defaults to type `"Point"` with empty coordinates.
- Passwords are stored hashed (not shown in response for security).