# Full-Stack User Management System

## 📌 Overview
This repository contains a **full-stack user management system** built with **Node.js, Sequelize, and PostgreSQL**. It provides authentication, CRUD operations, and role-based access control for managing users, teachers, and students.

---

## 📂 Repository Structure
```
alberto_vanoldenbarneveld-proyecto/
│── README.md                        # Project overview
│── docker-compose.services.yml      # Docker configuration for services
│── package.json                      # Project dependencies
│── package-lock.json                 # Lockfile for dependencies
│── scripts/
│   ├── encrypt-passwords.js         # Script for password encryption
│   ├── queries.sh                   # Script for executing SQL queries
│   ├── setup.sh                      # Setup script for database
│   ├── test-api.sh                   # API testing script
│── src/
│   ├── app.js                        # Main server entry point
│   ├── config/
│   │   └── config.json               # Database configuration
│   ├── controllers/
│   │   ├── AuthController.js         # Handles user authentication
│   │   ├── StudentController.js      # Handles student operations
│   │   ├── TeacherController.js      # Handles teacher operations
│   │   ├── UserController.js         # Handles user management
│   ├── migrations/
│   │   ├── create-user.js            # User table migration
│   │   ├── create-teacher.js         # Teacher table migration
│   │   ├── create-student.js         # Student table migration
│   ├── models/
│   │   ├── index.js                  # Initializes Sequelize models
│   │   ├── student.js                 # Student model
│   │   ├── teacher.js                 # Teacher model
│   │   ├── user.js                    # User model
│   ├── routes/
│   │   ├── auth.js                   # Authentication routes
│   │   ├── login.js                  # Login handling
│   │   ├── students.js               # Student routes
│   │   ├── teachers.js               # Teacher routes
│   │   ├── users.js                   # User routes
│   ├── seeders/
│   │   ├── 001-seed-users.js          # Initial user data
│   │   ├── 002-seed-teachers.js       # Initial teacher data
│   │   ├── 003-seed-students.js       # Initial student data
│   ├── views/
│   │   ├── error-login.html           # Error page
│   │   ├── home.html                  # Homepage
│   │   ├── login.html                 # Login page
│   │   ├── users.html                 # User management page
│   │   ├── users.mustache             # Mustache template for users
```

---

## 🚀 Features
- **User Authentication & JWT Tokens**
- **Role-Based Access Control (RBAC)**
- **CRUD Operations for Users, Teachers, and Students**
- **Password Encryption with bcrypt**
- **Dockerized Database Setup**
- **Seeders for Initial Data**

---

## 🏗️ Database Schema
```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    type TEXT,
    active BOOLEAN DEFAULT true
);

CREATE TABLE Teachers (
    id SERIAL PRIMARY KEY,
    dni TEXT,
    name TEXT,
    last_name TEXT,
    date_of_birth DATE,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Students (
    id SERIAL PRIMARY KEY,
    dni TEXT,
    name TEXT,
    last_name TEXT,
    date_of_birth DATE,
    teacher_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teachers(id)
);
```

---

## 🔥 API Endpoints
```bash
# User Management
GET /api/users          # Get all users
GET /api/users/:id      # Get user by ID
POST /api/users        # Create a new user
PUT /api/users/:id     # Update user
DELETE /api/users/:id  # Delete user (restricted)

# Authentication
POST /login            # Authenticate user
POST /logout           # Destroy session
POST /api/token        # Generate JWT token

# Teachers & Students
GET /api/teachers/:id/students  # Get students under a teacher
```

---

## 🚀 Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/albertusdixit/fullstack-user-management.git
   cd fullstack-user-management
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Setup the database**:
   ```bash
   npm run setup
   ```
4. **Run the application**:
   ```bash
   npm start
   ```

---

## 🛠️ Technologies Used
- **Node.js & Express.js**
- **PostgreSQL & Sequelize**
- **JWT Authentication**
- **bcrypt for Password Hashing**
- **Docker (optional)**

💡 Contributions & feedback are welcome!

