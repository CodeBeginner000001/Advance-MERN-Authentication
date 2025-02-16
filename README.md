# Advanced MERN Authentication System
<p align = 'center'>
<img src = "https://github.com/user-attachments/assets/b3002a70-81e7-4f76-a1a6-cafe872685fa" height="200"/>
</p>
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
### Screenshots
- **Login Page & Signup**
<span align = "center">
<img width="353" alt="Screenshot 2025-02-13 at 5 29 55 PM" src="https://github.com/user-attachments/assets/ad1878a3-1506-400b-b3b3-a802d3177b58" />
</span>
<span>
<img width="353" alt="Screenshot 2025-02-13 at 5 30 08 PM" src="https://github.com/user-attachments/assets/2d4e403b-fa3d-4414-961f-4c877e85daa1" />
</span>
---
- **Verify your email & Dashboard**
<span align = "center">
<img width="498" alt="Screenshot 2025-02-13 at 5 31 09 PM" src="https://github.com/user-attachments/assets/cca042e8-910a-4a99-ab4c-e1f5a5ffef07" />
</span>
<span align = "center">
<img width="498" alt="Screenshot 2025-02-13 at 5 31 30 PM" src="https://github.com/user-attachments/assets/18f6ca37-7df8-471f-8c5d-731221ae6a5d" />
</span>
---
- **Forget Password**
<span align="center">
<img width="495" alt="Screenshot 2025-02-13 at 5 32 11 PM" src="https://github.com/user-attachments/assets/85251b9d-ac88-4f60-a1e7-fc2716ca261f" />
</span>
<span align="center">
<img width="1118" alt="Screenshot 2025-02-13 at 5 32 24 PM" src="https://github.com/user-attachments/assets/7671a4eb-6ae7-4344-89d3-aa88743fc57c" />
</span>
---
- **Reset Password**
<span align="center">
<img width="477" alt="Screenshot 2025-02-13 at 5 32 47 PM" src="https://github.com/user-attachments/assets/efd17a03-1df4-4264-bde9-acef31d4e84f" />
</span>
---
- **Verification Code & Welcome Emails**
<span align="center">
<img width="614" alt="Screenshot 2025-02-13 at 5 31 47 PM" src="https://github.com/user-attachments/assets/3f2e7147-1d02-4298-a951-9cf2debebaa0" />
</span>
<span align="center">
<img width="629" alt="Screenshot 2025-02-13 at 5 32 00 PM" src="https://github.com/user-attachments/assets/64a2d3a3-ec9f-4618-99c4-64339b1dddf7" />
</span>
---
- **Password Reset & Successful Email**
<span align="center">
<img width="608" alt="Screenshot 2025-02-13 at 5 32 40 PM" src="https://github.com/user-attachments/assets/37d29f10-e037-4f4e-9578-6ca00d566936" />
</span>
<span align="center">
<img width="619" alt="Screenshot 2025-02-13 at 5 33 15 PM" src="https://github.com/user-attachments/assets/8b32515e-33d6-43b6-9b69-2a38a01a41f6" />
</span>
---
## 🚀 Deployment
- Deployed on **Render**
- Live Project: [Advanced MERN Authentication](https://advance-mern-authentication-vqqq.onrender.com)
