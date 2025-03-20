# Rental-App 🏡

## 🌟 Key Features

- **User Authentication** – Secure login with Spring Security & JWT.
- **Property Listings** – List, browse, and manage rental properties.
- **Dynamic Frontend** – Angular-powered UI with API integration via Axios.
- **Robust Backend** – Spring Boot with MySQL for efficient data handling.

## 🛠 Installation Guide

### 📌 Backend Setup (Spring Boot)
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Shefa-li/House-Rental-Web-App.git
   cd Rental-App/backend
   ```
2. **Set up the database (MySQL)**
   ```sql
   CREATE DATABASE rental_app;
   ```
3. **Configure environment variables (.env)**
   ```plaintext
   DB_URL=jdbc:mysql://localhost:3306/rental_app
   DB_USER=root
   DB_PASSWORD=yourpassword
   JWT_SECRET=your_secret_key
   ```
4. **Install dependencies and run the server**
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
   
### 📌 Frontend Setup (Angular)
1. **Navigate to the frontend directory**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the frontend**
   ```sh
   ng serve
   ```
4. **Access the application:**  
   Open [http://localhost:4200](http://localhost:4200) in your browser.


