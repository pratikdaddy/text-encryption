# 🔐 Secure Text Encryptor

A simple, secure web application to encrypt and decrypt text using AES-256 encryption, built with Node.js and Express.

---

## 📖 Overview

**Secure Text Encryptor** allows you to safely encrypt any plain text and decrypt it back using a strong encryption algorithm (AES-256). The app features a modern, responsive web interface and a Node.js backend.  
This project is ideal for learning about encryption, Node.js, and web app deployment.

---

## 🛠️ How to Use This Project (Step-by-Step Guide)

### 1.open this text encryption folder in VS CODE
```sh
git clone https://github.com/pratikdaddy/text-encryption.git
cd text-encryption

```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.  
Then, in your project folder, run:

```sh
npm install
```

### 3. Start the Application

Run the following command:

```sh
node app.js
```

By default, the app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🌐 Accessing the App

1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. You will see two sections:
    - **Text to Encrypt:** Enter any plain text and click "Encrypt" to get the encrypted version.
    - **Text to Decrypt:** Paste an encrypted string and click "Decrypt" to get the original text.

---

## 📦 Project Structure

```
encryption-app/
├── app.js                # Main server file (Express backend)
├── cryptoHelper.js       # Encryption/decryption logic
├── package.json          # Project metadata and dependencies
├── .env                  # Your secret key (not in repo)
├── public/
│   └── index.html        # Frontend UI
```

---


**Developed by Pratik Sharma**
