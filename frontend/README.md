## Frontend Usage Guide

This project uses **React** (with Vite) for the frontend. Below are the main features and usage instructions based on the implemented pages and components.

---

### Pages & Navigation

- **Start Page (`/`)**
  - Welcome screen with options to Sign Up or Login.
  - Navigation handled by React Router.

- **Sign Up Page (`/signup`)**
  - Collects user's first name, last name, email, phone number, and password.
  - Validates input fields:
    - First and last name: at least 3 characters.
    - Phone number: exactly 11 digits.
    - Password: at least 6 characters and must match re-entered password.
  - On successful signup:
    - Stores JWT token and email in `localStorage`.
    - Navigates to OTP verification page.
    - Shows success notification using Notyf.
  - On error:
    - Displays error notification.

- **Login Page (`/login`)**
  - Placeholder for user login (to be implemented).

- **OTP Verification Page (`/otp-verification`)**
  - User enters the OTP sent to their email.
  - OTP and email are sent to the backend for verification.
  - On success: shows success notification.
  - On failure: shows error notification.

- **Home Page (`/home`)**
  - Placeholder for the main user dashboard (to be implemented).

---

### Components

- **InputText**
  - Custom styled Material UI input used for form fields.

---

### State Management

- Uses React's `useState` for local form state.
- Uses `localStorage` to persist JWT token and user email after signup.

---

### Notifications

- Uses [Notyf](https://github.com/caroso1222/notyf) for toast notifications on success and error.

---

### API Integration

- Uses [Axios](https://axios-http.com/) for HTTP requests.
- API base URL is set in `.env` as `VITE_BASE_URL`.

---

### Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- Uses Google Fonts for typography.
- Custom styles for Material UI components.

---

### How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set API base URL:**
   - Edit `.env` and set `VITE_BASE_URL` to your backend URL (default: `http://localhost:3000`).

3. **Start the frontend:**
   ```sh
   npm run dev
   ```

4. **Access the app:**
   - Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

### Folder Structure

- `pages/` — Main page components (Start, SignUp, Login, Home, Otp)
- `component/` — Reusable UI components (e.g., InputText)
- `src/` — Main React entry point and global styles
- `utils/` — Utility files (e.g., MUI exports)

---

### Environment Variables

- `.env`  
  ```
  VITE_BASE_URL=http://localhost:3000
  ```

---

### Notes

- The frontend expects the backend to provide the endpoints `/user/signup` and `/user/otp-verify` as documented in the backend readme.
- OTP verification and user authentication are handled via API calls.
- All form validation is performed client-side before sending requests.

---