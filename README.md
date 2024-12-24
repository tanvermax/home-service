# Service Sharing Web Application

## Project Overview

<ins>This project is a service-sharing web application that allows users to perform various actions, including: </ins>

- Adding, updating, and deleting their own services.

- Browsing services shared by others.

- Viewing details of specific services.

- Booking services.

- Managing the statuses of booked services.

The platform focuses on providing a user-friendly experience with features like service management, booking, and status updates.

# Features

## Authentication

- Login Page: Supports Email/Password-based login and Google Sign-In.

- Registration Page: Supports user registration with fields for Name, Email, Password, and Photo URL. Includes Google Sign-In.

- Relevant error messages are displayed for incorrect inputs.

## Pages and Routes

### Home Page:

- Contains a banner/slider for a visually appealing landing page.

- Displays popular services with a limit of 6 services.

- Includes a "Show All" button that redirects to the All Services page.

- Includes at least two additional unique sections for enhanced engagement.

- Utilizes animations for an attractive user experience.

All Services Page:

Public route showing all available services in a one-column layout.

Each service card displays:

Service Image

Service Name

Short Description (max 100 characters)

View Detail Button

Service Provider Image, Name

Service Area

Service Price

Single Service Details (Private):

Shows detailed information about a specific service.

Includes a "Book Now" button.

Booking modal/form contains fields:

Non-editable: Service ID, Service Name, Service Image, Provider Email, Provider Name, Current User Email, Current User Name, Price

Editable: Service Taking Date, Special Instruction

Booking information is stored in the database with a default status of "pending".

Add-A-Service Page (Private):

Allows users to add a service with fields:

Service Image URL

Service Name

Price

Service Area

Description

Captures service provider information (image, name, email) from Firebase.

Manage-Services Page (Private):

Displays all services added by the logged-in user.

Each service card includes Edit and Delete buttons.

Edit: Opens a form/modal for updating the service.

Delete: Prompts a confirmation before removing the service.

Booked Services Page (Private):

Displays services booked by the logged-in user.

If no services are booked, shows a relevant message.

Service To Do Page (Private):

Displays all services booked by others where the logged-in user is the provider.

Includes a dropdown for updating the service status ("pending", "working", "completed").

404 Error Page:

Displays a message for invalid routes.

Includes a button that redirects users to the Home Page.

Navbar Design

Non-Logged-In Users:

Home

Services

Login

Logged-In Users:

Home

Services

Dashboard (Dropdown with links to Add Service, Manage Services, Booked Services, Service To Do)

Logout Button with User Image/Name

Dynamic Features

Search System:

Implements a search functionality based on service names on the All Services page.

Filters and displays matching services in real-time.

Theme Customization:

Provides a toggle button for switching between light and dark themes.

Dynamic Titling:

Updates the website title dynamically based on the current route.

JWT Authentication:

Creates a JWT token on login and stores it client-side.

Sends the token with API calls and verifies it on private routes.

Layout

Header: Contains a dynamic Navbar based on user authentication status.

Footer: Includes:

Website logo and name

Copyright information

Social media links (Facebook and LinkedIn)

Technologies Used

Frontend: React.js, Firebase Authentication

Backend: Node.js, Express.js

Database: MongoDB

Styling: Tailwind CSS / CSS Frameworks

Animations: Framer Motion / AOS

Authentication: Firebase + JWT