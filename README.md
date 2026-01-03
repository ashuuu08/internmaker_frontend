# 🚀 Internship Platform - Complete Full Stack Project

A comprehensive internship management platform built with **React** (Frontend) and **Spring Boot** (Backend) featuring payment integration, automated certificate generation, and admin dashboard.

## 📋 Project Overview

This platform allows students to enroll in a Java Developer internship program with the following features:
- **Automated enrollment** with offer letter generation
- **Secure payment** integration (Cashfree)
- **Task management** with deadline tracking
- **Certificate generation** upon completion
- **Admin dashboard** for managing enrollments and reviewing submissions
- **Email notifications** for all major events

---

## 🏗️ Project Structure

```
internship-platform/
├── backend/                          # Spring Boot Java Backend
│   ├── src/main/
│   │   ├── java/com/internify/
│   │   │   ├── InternshipPlatformApplication.java
│   │   │   ├── config/              # Security, CORS, etc.
│   │   │   ├── controller/          # REST Controllers
│   │   │   ├── dto/                 # Data Transfer Objects
│   │   │   │   ├── LoginRequest.java
│   │   │   │   ├── SignupRequest.java
│   │   │   │   └── AuthResponse.java
│   │   │   ├── entity/              # JPA Entities
│   │   │   │   ├── User.java
│   │   │   │   ├── Enrollment.java
│   │   │   │   ├── Task.java
│   │   │   │   ├── Certificate.java
│   │   │   │   └── Payment.java
│   │   │   ├── repository/          # JPA Repositories
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── EnrollmentRepository.java
│   │   │   │   ├── TaskRepository.java
│   │   │   │   ├── CertificateRepository.java
│   │   │   │   └── PaymentRepository.java
│   │   │   ├── service/             # Business Logic (TO BE CREATED)
│   │   │   ├── security/            # JWT & Security (TO BE CREATED)
│   │   │   ├── exception/           # Exception Handling (TO BE CREATED)
│   │   │   └── util/                # Utilities (TO BE CREATED)
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
│
├── frontend/                         # React Frontend
│   ├── src/
│   │   ├── components/              # Reusable Components (TO BE CREATED)
│   │   ├── pages/                   # Page Components (TO BE CREATED)
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Payment.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/                # API Services (TO BE CREATED)
│   │   ├── context/                 # Context API (TO BE CREATED)
│   │   ├── utils/                   # Utilities (TO BE CREATED)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── PROJECT_SETUP.md                 # Detailed setup guide
```

---

## ✅ What's Already Created

### Backend (Spring Boot)
- ✅ **Project Structure** - Complete folder hierarchy
- ✅ **Maven Configuration** (pom.xml) - All dependencies added
- ✅ **Application Properties** - Database, JWT, Email, Payment config
- ✅ **Main Application Class** - Spring Boot entry point
- ✅ **Entity Classes** (5 entities):
  - User (authentication & user management)
  - Enrollment (internship enrollment tracking)
  - Task (assignment management)
  - Certificate (certificate generation)
  - Payment (payment transactions)
- ✅ **Repository Interfaces** (5 repositories) - JPA data access
- ✅ **DTO Classes** - LoginRequest, SignupRequest, AuthResponse

### Frontend (React + Vite)
- ✅ **Project Structure** - Complete folder hierarchy
- ✅ **Package.json** - All dependencies configured
- ✅ **Vite Configuration** - Dev server with API proxy
- ✅ **Tailwind CSS** - Complete styling setup
- ✅ **Main Files** - App.jsx, main.jsx, index.html
- ✅ **Custom CSS** - Animations, styles, dark theme
- ✅ **Routing Structure** - React Router configured

---

## 🔧 Quick Start Guide

### Prerequisites
- **Java 17+**
- **Node.js 18+**
- **MySQL 8.0+**
- **Maven 3.6+**

### 1. Database Setup
```sql
CREATE DATABASE internship_db;
USE internship_db;
```

### 2. Backend Setup
```bash
cd backend

# Update application.properties with your database credentials
# Update email and payment gateway credentials

# Build and run
mvn clean install
mvn spring-boot:run
```
Backend will run on: **http://localhost:8080**

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
Frontend will run on: **http://localhost:3000**

---

## 🚧 What Needs to Be Implemented

### High Priority (Core Functionality)

#### Backend:
1. **Security Configuration** (`config/SecurityConfig.java`)
   - JWT authentication filter
   - CORS configuration
   - Security rules

2. **JWT Utility** (`security/JwtUtil.java`)
   - Token generation
   - Token validation
   - Extract user details

3. **Authentication Controller** (`controller/AuthController.java`)
   - Register endpoint
   - Login endpoint
   - Email verification

4. **User Service** (`service/UserService.java`)
   - User registration logic
   - Password encryption
   - Email verification

5. **Enrollment Service** (`service/EnrollmentService.java`)
   - Create enrollment
   - Generate enrollment number
   - Update phases

6. **Payment Service** (`service/PaymentService.java`)
   - Cashfree integration
   - Create payment order
   - Verify payment
   - Handle webhooks

7. **Document Generation Service** (`service/DocumentService.java`)
   - Generate offer letter PDF
   - Generate certificate PDF
   - Generate invoice PDF
   - QR code generation

8. **Email Service** (`service/EmailService.java`)
   - Welcome email
   - Offer letter email
   - Payment confirmation
   - Task reminders
   - Certificate email

9. **Task Service** (`service/TaskService.java`)
   - Create tasks
   - Handle submissions
   - File upload
   - Review tasks

10. **File Storage Service** (`service/FileStorageService.java`)
    - Upload files
    - Download files
    - Delete files

#### Frontend:
1. **Landing Page** (`pages/LandingPage.jsx`)
   - Hero section matching the UI
   - Experience gap table
   - Execution roadmap
   - Pricing card

2. **Authentication Pages**
   - Login.jsx
   - Signup.jsx

3. **Student Dashboard** (`pages/Dashboard.jsx`)
   - Progress tracker
   - Download documents
   - Submit tasks
   - View deadlines

4. **Payment Page** (`pages/Payment.jsx`)
   - Cashfree integration
   - Order summary

5. **Admin Dashboard** (`pages/AdminDashboard.jsx`)
   - Statistics
   - Enrollment management
   - Task review
   - Payment reports

6. **API Service** (`services/api.js`)
   - Axios configuration
   - API endpoints
   - Auth interceptor

7. **Auth Context** (`context/AuthContext.jsx`)
   - User state management
   - Login/logout functions
   - Protected routes

8. **Components**
   - Navbar
   - Footer
   - Cards
   - Forms
   - Modals

---

## 📦 Dependencies Already Installed

### Backend (Spring Boot)
- Spring Boot Web
- Spring Boot Data JPA
- Spring Boot Security
- Spring Boot Mail
- MySQL Connector
- JWT (jjwt)
- Apache PDFBox (PDF generation)
- Google ZXing (QR codes)
- Lombok
- Apache POI
- Springdoc OpenAPI (Swagger)

### Frontend (React)
- React 18
- React Router DOM
- Axios
- React Icons
- Framer Motion (animations)
- React Toastify (notifications)
- Formik + Yup (forms)
- Chart.js (charts)
- Tailwind CSS

---

## 🔐 Environment Variables

### Backend (`application.properties`)
Update these values:
```properties
# Database
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

# JWT Secret (Generate a secure 256-bit key)
jwt.secret=YOUR_SECURE_JWT_SECRET_KEY

# Email Configuration
spring.mail.username=YOUR_EMAIL@gmail.com
spring.mail.password=YOUR_APP_PASSWORD

# Cashfree
cashfree.client-id=YOUR_CASHFREE_CLIENT_ID
cashfree.client-secret=YOUR_CASHFREE_SECRET
```

### Frontend (`.env`)
Create `.env` file:
```env
VITE_API_URL=http://localhost:8080/api
VITE_APP_NAME=Internship Platform
```

---

## 📝 API Endpoints (To Be Implemented)

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-email` - Verify email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Enrollments
- `POST /api/enrollments/create` - Create new enrollment
- `GET /api/enrollments/my-enrollment` - Get user's enrollment
- `PUT /api/enrollments/{id}/update-phase` - Update phase

### Payments
- `POST /api/payments/create-order` - Create payment order
- `POST /api/payments/verify` - Verify payment
- `POST /api/payments/webhook` - Cashfree webhook
- `GET /api/payments/{id}/invoice` - Download invoice

### Tasks
- `GET /api/tasks/my-tasks` - Get student's tasks
- `POST /api/tasks/{id}/submit` - Submit task
- `GET /api/tasks/{id}/download` - Download assignment
- `PUT /api/admin/tasks/{id}/review` - Review submission (admin)

### Documents
- `GET /api/documents/offer-letter` - Generate offer letter
- `GET /api/documents/certificate` - Generate certificate
- `GET /api/documents/verify/{code}` - Verify certificate

### Admin
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/enrollments` - Get all enrollments
- `GET /api/admin/payments` - Payment reports

---

## 🎨 Design System (Already Configured)

### Colors
- **Primary Green**: `#22c55e` (success, CTAs)
- **Dark Background**: `#0a0a0a` (main bg)
- **Card Background**: `#18181b` (cards, modals)
- **Red**: For errors, alerts
- **Blue**: For information

### Typography
- System fonts optimized for readability
- Gradient text effects for headings

### Components
- Custom buttons (`.btn-primary`, `.btn-secondary`)
- Card styles (`.card`)
- Input fields (`.input-field`)
- Animations (fade-in, slide-in, glow)

---

## 🚀 Next Steps to Complete the Project

1. **Implement JWT Security** (Backend)
2. **Create all Service classes** (Backend)
3. **Create all Controller classes** (Backend)
4. **Integrate Cashfree Payment** (Backend)
5. **Implement PDF Generation** (Backend)
6. **Create Landing Page** (Frontend)
7. **Create Authentication Pages** (Frontend)
8. **Create Student Dashboard** (Frontend)
9. **Create Admin Dashboard** (Frontend)
10. **Connect Frontend to Backend** (API Integration)
11. **Testing & Bug Fixes**
12. **Deployment**

---

## 📚 Documentation

- **Swagger API Docs**: http://localhost:8080/swagger-ui.html (when backend runs)
- **Detailed Setup**: See `PROJECT_SETUP.md`

---

## 🤝 Contributing

This is a complete internship management system. To contribute:
1. Create services and controllers for backend
2. Create page components for frontend
3. Connect everything together
4. Test thoroughly
5. Deploy!

---

## 📄 License

This project is for educational purposes.

---

## 💡 Tips

### For Backend Development:
- Use Postman to test APIs
- Check Swagger docs for API documentation
- Use H2 console for quick testing (change in application.properties)
- Follow RESTful conventions

### For Frontend Development:
- Use React DevTools for debugging
- Check browser console for errors
- Use Tailwind CSS classes for styling
- Test responsiveness on different screens

---

## 🎯 Current Project Status

**Setup: ✅ COMPLETE**
- Project structure created
- All dependencies configured
- Database schema designed
- Basic configurations done

**Development: 🚧 IN PROGRESS**
- Need to implement services
- Need to create controllers
- Need to build UI components
- Need to integrate payment

**Deployment: ⏳ PENDING**
- Backend deployment setup
- Frontend deployment setup
- Database hosting
- Environment configuration

---

**Created by:** Your Team
**Last Updated:** December 2024
**Version:** 1.0.0

---

## 🆘 Need Help?

- Check `PROJECT_SETUP.md` for detailed instructions
- Review entity classes for database structure
- Check application.properties for configurations
- Test with Swagger UI once services are implemented

**Happy Coding! 🎉**