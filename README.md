Note App
========

Overview
--------

Anmol Khangura Note App is a full-stack web application that allows users to create, edit, and delete notes. The application is built using React (frontend) and Node.js with Express (backend), and it incorporates authentication for user management.

Motivation
----------

The motivation behind this project is:

*   To learn about user authentication and Google OAuth.
    
*   To implement JWT for secure authentication and a stateless server.
    
*   To gain hands-on experience with React and backend development while following best practices.
    
*   To get a sense of full-stack development by working on both frontend and backend.
    
*   To integrate PostgreSQL as the database solution.
    

Features
--------

*   User authentication (sign-up, login, and logout)
    
*   Google OAuth integration
    
*   Create, read, update, and delete (CRUD) notes
    
*   Secure authentication using JWT
    
*   RESTful API for backend operations
    
*   Frontend built with React and Vite
    
*   Backend using Express and PostgreSQL
    

Current Progress
----------------

*   The **backend** is complete and can be tested with Postman.
    
*   The **frontend UI components** are ready, but they still need to be connected to the backend.
    

Installation
------------

### Prerequisites

*   Setting up Google OAuth: [Google Cloud OAuth Setup Guide](https://support.google.com/cloud/answer/6158849?hl=en#zippy=)
    
*   [Node.js](https://nodejs.org/)
    
*   [PostgreSQL](https://www.postgresql.org/)
    

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/)
    
*   [PostgreSQL](https://www.postgresql.org/)
    

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/anmolkhangura/note-app.git
   cd note-app
   ```
    
2.  Install dependencies:
    ```
    cd app
    npm install
    cd ../server
    npm install
    ```
      
3.  Set up environment variables:
     - Create a .env file in the server/ directory and configure the following:
       
        ```
        ACCESS_TOKEN_SECRET=your_jwt_secret_key
        PG_USER=your_postgres_user
        PG_HOST=your_postgres_host
        PG_DATABASE=your_postgres_database
        PG_PASSWORD=your_postgres_password
        PG_PORT=your_postgres_port
        GOOGLE_CLIENT_ID=your_google_client_id
        GOOGLE_CLIENT_SECRET=your_google_client_secret
        ```
      
4.  Start the backend server:
    ```
    cd server
    npm start
    ```
    
5. Start the frontend:
   ```
   cd app
   npm run dev
   ```
    
6.  Open the application in your browser at http://localhost:5173.
    

API Endpoints
-------------

### Authentication

*   POST /auth/register - Register a new user
    
*   POST /auth/login - Authenticate user
    
*   GET /auth/google - Initiate Google OAuth login
    
*   GET /auth/google/secrets - Handle Google OAuth callback
    

### Notes

*   GET /notes - Fetch all notes (JWT required)
    
*   POST /notes - Create a new note (JWT required)
    
*   PUT /notes/:id - Update a note (JWT required)
    
*   DELETE /notes/:id - Delete a note (JWT required)
    

### User

*   GET /user - Fetch user details (JWT required)
    

Technologies Used
-----------------

### Frontend

*   React
    
*   Axios
    
*   Tailwind CSS
    

### Backend

*   Node.js
    
*   Express
    
*   PostgreSQL
    
*   Passport.js (Authentication & Google OAuth)
    
*   JWT (JSON Web Tokens)
