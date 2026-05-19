Student Management System

A Full Stack CRUD Application developed using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript for managing student records.

Features
Add Student
View All Students
Update Student Details
Delete Student
REST API Integration
PostgreSQL Database Connectivity
Separate Frontend and Backend
Tech Stack
Backend
Java
Spring Boot
Spring Data JPA
PostgreSQL
Maven
Frontend
HTML
CSS
JavaScript
Project Structure
student-management-system
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
└── frontend
    ├── index.html
    ├── style.css
    └── script.js
Backend Setup
1. Clone Repository
git clone https://github.com/yourusername/student-management-system.git
2. Open Backend in STS

Open:

backend

as Spring Boot project.

3. Configure PostgreSQL

Create database:

CREATE DATABASE studentdb;

Update:

application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/studentdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
4. Run Spring Boot Application

Run:

StudentManagementSystemApplication.java

Backend runs on:

http://localhost:8080
Frontend Setup
1. Open Frontend Folder in VS Code

Open:

frontend
2. Install Live Server Extension

Install:

Live Server
3. Run Frontend

Right click:

index.html

Click:

Open with Live Server

Frontend runs on:

http://127.0.0.1:5500
API Endpoints
Method	Endpoint	Description
GET	/students	Get all students
GET	/students/{id}	Get student by ID
POST	/students	Add student
PUT	/students/{id}	Update student
DELETE	/students/{id}	Delete student
