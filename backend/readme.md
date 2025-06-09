## User Sign Up API

**Endpoint:**  
`POST /api/users/signup`

**Description:**  
Creates a new user account and sends an OTP to the user's email for verification.

**Request Body:**  
Send a JSON object with the following fields:

| Field        | Type   | Required | Description                                 |
|--------------|--------|----------|---------------------------------------------|
| firstName    | String | Yes      | User's first name (min 3 characters)        |
| lastName     | String | Yes      | User's last name (min 3 characters)         |
| phoneNumber  | String | Yes      | User's phone number (must be unique, min 11 chars) |
| email        | String | Yes      | User's email address (must be unique, valid email) |
| password     | String | Yes      | User's password (min 6 chars)               |

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
  "token": "jwt_token_here",
  "user": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "01234567890",
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketId": null,
    "location": {
      "type": "Point",
      "coordinates": []
    },
    "isVerified": false,
    "__v": 0
  }
}
```

**Error Responses:**

- **409 Conflict:** User already exists with this email.
- **400 Bad Request:** Missing or invalid fields.
- **500 Internal Server Error:** Server error.

**Notes:**
- An OTP is sent to the user's email after successful signup.
- The `location` field is optional at sign up. If not provided, it defaults to type `"Point"` with empty coordinates.
- Passwords are stored hashed (not shown in response for security).
- On success, a JWT token is returned in the response.
- The `isVerified` field will be `false` until the user verifies their OTP.

---

## OTP Verification API

**Endpoint:**  
`POST /api/users/otp-verify`

**Description:**  
Verifies the OTP sent to the user's email and marks the user as verified.

**Request Body:**  
Send a JSON object with the following fields:

| Field | Type   | Required | Description           |
|-------|--------|----------|-----------------------|
| email | String | Yes      | User's email address  |
| otp   | String | Yes      | OTP sent to the email |

**Example Request:**
```json
POST /api/users/otp-verify
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "otp": "1234"
}
```

**Success Response:**

- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "OTP verified successfully"
}
```

**Error Responses:**

- **401 Unauthorized:** User not registered.
- **400 Bad Request:** Invalid OTP.
- **500 Internal Server Error:** Server error.

**Notes:**
- After successful OTP verification, the user's `isVerified` field is set to `true`.
- OTP expires after 60 seconds.