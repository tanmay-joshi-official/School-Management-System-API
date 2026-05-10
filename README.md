# School Management System API

A REST API built using Node.js, Express.js, and MySQL to manage school data.

This project allows users to:
- Add new schools
- Fetch schools sorted by proximity based on user location

---

## 🚀 Features

- Add School API
- List Schools API
- Distance-based sorting
- MySQL database integration
- Input validation
- Clean folder structure
- RESTful API architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv
- cors

---

## 📁 Folder Structure

```bash
School Management API
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── schoolController.js
│   │
│   ├── routes
│   │   └── schoolRoutes.js
│   │
│   └── utils
│       └── distanceCalculator.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/tanmay-joshi-official/School-Management-System-API.git
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🗄️ MySQL Setup

Create a MySQL database:

```sql
CREATE DATABASE school_management;
```

Use database:

```sql
USE school_management;
```

Create the `schools` table:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
```

---

## ▶️ Run Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

## 📮 API Endpoints

### Add School

**Endpoint**

```bash
POST /addSchool
```

**Request Body**

```json
{
  "name": "Delhi Public School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

**Success Response**

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

### List Schools

**Endpoint**

```bash
GET /listSchools?latitude=28.6&longitude=77.2
```

**Success Response**

```json
{
  "success": true,
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Delhi",
      "latitude": 28.7041,
      "longitude": 77.1025,
      "distance": "14.98 KM"
    }
  ]
}
```

---

## 📏 Distance Calculation

The API uses the Haversine Formula to calculate the geographical distance between the user's coordinates and school locations.

Schools are automatically sorted based on nearest distance.

---

## 🧪 API Testing

The APIs were tested using Postman.

---

## 👨‍💻 Author

Tanmay Joshi