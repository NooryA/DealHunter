# DealHunter

**DealHunter** is an e-commerce platform designed to provide users with a seamless online shopping experience. It enables users to browse products, manage a shopping cart, and process orders efficiently through an intuitive interface.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

1. **Java Development Kit (JDK)** (version 11 or later)
   - [Download JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
2. **Maven**
   - [Install Maven](https://maven.apache.org/install.html)
3. **Node.js and npm**
   - [Download Node.js](https://nodejs.org)
4. **MySQL**
   - Ensure MySQL is running and accessible.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NooryA/DealHunter.git
   cd DealHunter
   
2. **Setup Database**:
   - Create a new MySQL database called `dealhunter` or update the connection details in the backend's `application.properties` file.
   - Run the following SQL command to create the database (if needed):
     ```sql
     CREATE DATABASE dealhunter;
     ```

3. **Configure Database Connection**:
   - Open the backend `application.properties` file (located in `src/main/resources/`).
   - Update the database connection details:
     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/dealhunter
     spring.datasource.username=your_mysql_username
     spring.datasource.password=your_mysql_password
     ```

---

### Running the Backend

1. **Navigate to the Backend Directory**:

   ```bash
   cd src/main

2. **Build the Backend**:

   Use Maven to build the backend:

   ```bash
   mvn clean install 

3. **Run the Backend**:

   Start the Spring Boot application:

   ```bash
   mvn spring-boot:run


### Running the Frontend

1. **Navigate to the Frontend Directory**:

   Open a new terminal window and navigate to the `fronte` directory:

   ```bash
   cd fronte
   
2. **Install Dependencies**:

   Use npm to install the required dependencies:

   ```bash
   npm install

3. **Configure API Endpoint**:

   Ensure the frontend communicates with the backend by updating the API URL in the frontend's environment configuration file (`.env` or `src/config.js`):
   ```bash
   REACT_APP_API_URL=http://localhost:8080


  4. **Run the Frontend**:

      ```bash
      npm start
