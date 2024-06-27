#Tour Package Reservation - Let's Travel............
.............
Project Link - https://lets-travel-virid.vercel.app............
.........
Overview...............
//////
Let's Travel is a web application that allows users to explore and reserve various tour packages for their dream destinations. The application is built using modern web technologies, including ReactJS for the front end and Express with Mongoose for the back end. It uses MongoDB Atlas as the database to store and manage tour package information.

Main Functionality

1. Explore Tour Packages: Users can browse through a wide range of tour packages available for different destinations. Each tour package will have details such as the destination name, description, image, and country.

2. Reservation: Users can reserve tour packages of their choice by providing their details and payment information. The application will ensure a seamless reservation process for the user.

3. Admin Privileges: The application is designed to have an admin who has special privileges to add, update, and delete tour packages. Only the admin will have access to these functionalities to manage the offerings effectively.

How to Run the Application

Backend Setup

1. Open the terminal in the "Backend" directory.

2. Run npm install to install the required dependencies.

3. Run node app to start the backend server.

Frontend Setup

1. Open the terminal in the "Frontend" directory.

2. Run npm install to install the required dependencies.

3. Run npm start to run the application in development mode.

4. Open http://localhost:3000 in your browser to access the application.

Database Configuration

The application uses MongoDB Atlas as the database. The MongoDB connection URL is provided below:

mongodb+srv://Yourusername:YourPassword@cluster0alh36.gcp.mongodb.net/Tourism?retryWrites=true&w=majority

User Roles

User: Regular users can explore and reserve tour packages. They cannot perform administrative tasks.

Admin: The admin has special privileges to manage tour packages. Only the admin can add, update, and delete tour package.

Important Notes

It's important to note that only the admin has the authority to perform administrative tasks on tour packages. Regular users can only reserve tour packages; they cannot modify or delete them.

Enjoy exploring and reserving your dream destinations with Let's Travel

