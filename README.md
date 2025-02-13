# Advanced MERN Authentication System
https://github.com/CodeBeginner000001/Advance-MERN-Authentication/blob/macbook/client/public/logo.png?raw=true![image](https://github.com/user-attachments/assets/a47f3dad-71ff-4987-bfdd-cdb96a4b5dee)

A simple yet powerful authentication system using the MERN stack. Users receive a verification code via email upon signing up. After verifying, they are directed to the dashboard with a welcome email. Features include login, email verification, password reset, and protected routes.

## 📑 Table of Contents
- [Features](#features)
- [Backend Setup](#backend-setup)
  - [Dependencies](#dependencies)
  - [Routes](#routes)
  - [File Structure](#file-structure)
- [Frontend Setup](#frontend-setup)
  - [Dependencies](#dependencies-1)
  - [File Structure](#file-structure-1)
- [Packages Documentation](#packages-documentation)
- [Routes Explanation](#routes-explanation)
- [Deployment](#deployment)

## Features
- User Signup with Email Verification
- Secure Login and Logout
- Welcome Email upon Verification
- Forgot Password & Reset Password via Email Link
- Authentication State Management
- Protected Routes with JWT Authentication
- Responsive UI with Animations

---

## 🔧 Backend Setup
### Dependencies:
```bash
npm init -y
npm i express mongoose cookie-parser nodemailer bcryptjs crypto jsonwebtoken dotenv cors
```

### Packages Documentation:
- **express**: Web framework for Node.js ([Docs](https://expressjs.com/))
- **mongoose**: ODM for MongoDB ([Docs](https://mongoosejs.com/))
- **cookie-parser**: Parses cookies ([Docs](https://www.npmjs.com/package/cookie-parser))
- **nodemailer**: Sends emails ([Docs](https://nodemailer.com/about/))
- **bcryptjs**: Password hashing ([Docs](https://www.npmjs.com/package/bcryptjs))
- **crypto**: Cryptographic functions ([Docs](https://nodejs.org/api/crypto.html))
- **jsonwebtoken**: JWT authentication ([Docs](https://www.npmjs.com/package/jsonwebtoken))
- **dotenv**: Loads environment variables ([Docs](https://www.npmjs.com/package/dotenv))
- **cors**: Handles Cross-Origin Resource Sharing ([Docs](https://www.npmjs.com/package/cors))

### Routes:
```js
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgetpassword);
router.post("/reset-password/:token", resetpassword);
router.get("/check-auth", verifyToken, checkAuth);
```

### Routes Explanation:
- **POST /signup** - Registers a new user and sends a verification email.
- **POST /login** - Logs in the user and issues a JWT token.
- **POST /logout** - Logs out the user by clearing the cookie.
- **POST /verify-email** - Verifies the user's email with a token.
- **POST /forget-password** - Sends a password reset link to the user.
- **POST /reset-password/:token** - Allows the user to reset their password.
- **GET /check-auth** - Verifies if the user is authenticated.

### Backend File Structure:
```
server.js
|-- nodemailer/
|   |-- NodemailerConfig.js
|   |-- emailTemplates.js
|   |-- emails.js
|   |-- index.html
|-- controllers/
|   |-- auth.js
|-- db/
|   |-- connectDB.js
|-- middleware/
|   |-- verifyToken.js
|-- models/
|   |-- user.js
|-- routes/
|   |-- authRoutes.js
|-- utils/
|   |-- generateTokenAndSetCookie.js
```

---

## 🌐 Frontend Setup
### Dependencies:
```bash
npm i react-router-dom framer-motion lucide-react zustand axios react-toastify
```

### Packages Documentation:
- **react-router-dom**: Routing for React apps ([Docs](https://reactrouter.com/))
- **framer-motion**: Animation library for React ([Docs](https://www.framer.com/motion/))
- **lucide-react**: Icon library ([Docs](https://lucide.dev/))
- **zustand**: State management ([Docs](https://github.com/pmndrs/zustand))
- **axios**: HTTP client for making API requests ([Docs](https://axios-http.com/))
- **react-toastify**: Notifications for React ([Docs](https://www.npmjs.com/package/react-toastify))

### Frontend File Structure:
```
src/
|-- components/
|   |-- FloatingShape.jsx
|   |-- Input.jsx
|   |-- LoadingSpinner.jsx
|   |-- PasswordStrengthMeter.jsx
|   |-- index.js
|-- pages/
|   |-- DashboardPage.jsx
|   |-- EmailVerificationPage.jsx
|   |-- ForgetPasswordPage.jsx
|   |-- LoginPage.jsx
|   |-- ResetPasswordPage.jsx
|   |-- SignupPage.jsx
|   |-- index.js
|-- store/
|   |-- authStore.js
|-- toastify/
|   |-- success&Fail.js
|-- utils/
|   |-- date.js
```

---

## 🚀 Deployment
- Deployed on **Render**
- Live Project: [Advanced MERN Authentication](https://advance-mern-authentication-vqqq.onrender.com)
