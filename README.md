# Student Club Management System

A full-stack application to manage university clubs, their members, and activities using Spring Boot and React.

## Features

- **Clubs**: Create, view, update, and delete clubs.
- **Members**: Manage club members.
- **Events**: Organize and manage club events.
- **Authentication**: User login and registration.
- **Responsive Design**: Mobile-friendly interface using Bootstrap.

## Technologies Used

- **Backend**: Spring Boot, MySQL, JPA/Hibernate
- **Frontend**: React, Bootstrap, Axios
- **Version Control**: Git, GitHub

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL

### Installation

#### Backend

1. **Navigate to Backend Directory**:
    ```bash
    cd backend
    ```

2. **Create `.env` File**:
    - Add your database configuration.
    ```env
    SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/club_management?useSSL=false&serverTimezone=UTC
    SPRING_DATASOURCE_USERNAME=root
    SPRING_DATASOURCE_PASSWORD=your_password
    ```

3. **Build and Run**:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

#### Frontend

1. **Navigate to Frontend Directory**:
    ```bash
    cd frontend
    ```

2. **Create `.env` File**:
    - Add any necessary environment variables.
    ```env
    REACT_APP_API_URL=http://localhost:8080/api
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start Development Server**:
    ```bash
    npm start
    ```

## Usage

1. **Access Frontend**: Open `http://localhost:3000` in your browser.
2. **Login/Register**: Create a new account or log in with existing credentials.
3. **Manage Clubs**: Create, view, update, and delete clubs.
4. **Manage Members**: Add or remove club members.
5. **Manage Events**: Organize events for clubs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License.
