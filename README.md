# 🧮 Node.js Calculator Web App

A simple calculator web application built using **Node.js without Express**. This project is designed to help beginners understand how to:

- Set up a basic HTTP server in Node.js
- Handle **GET** and **POST** requests
- Collect user input through HTML forms
- Parse data using `Buffer` and `URLSearchParams`
- Organize logic using modular files

---

## 📸 Demo

![Node.js Calculator Screenshot](https://via.placeholder.com/800x400?text=Calculator+UI)

> Add your own screenshot here by uploading to the repo and linking it above.

---

## 🚀 Features

- 📂 Clean modular structure (`math.js`, `handler.js`, `aap.js`)
- 🧾 Handles form submissions using raw Node.js
- ➕ Performs basic addition of two numbers
- 🔄 Dynamic response display with the result
- 🌐 Simple HTML interface with navigation

---

## 📁 Folder Structure

Calculator/
│
├── aap.js # Main server file
├── handler.js # Route handler (controls routes)
├── math.js # Business logic (sum handler)
└── README.md # Project documentation

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- HTML (Basic form)
- Core Node modules: `http`, `url`, `buffer`

> 🚫 No frameworks like Express were used.

---

## ▶️ Getting Started

### 🔧 Prerequisites
- Install [Node.js](https://nodejs.org/) (v14 or later recommended)

### 📦 Run the App
```bash
node aap.js

http://localhost:5000
