
# 📚 Adress Book Frontend

This is the **Angular 18** frontend of the Book Address system. The project is built with a scalable **feature-based folder structure**, designed to handle CRUD operations and secure user interactions.

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/MarwaMohamed299/AddressBookF
cd book-address-f
2. Install Dependencies
Make sure you have Node.js and Angular CLI installed, then run:

bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
npm start
The application will be served at:
🔗 http://localhost:4200/

🛡️ Security
JWT Authentication is integrated to protect routes and user data.

A route guard is implemented to prevent access to secured pages {user details ] unless the user is authenticated (logged in).

Users can only view and access their private data.

✨ Features
🔐 JWT Authentication Integration

Only authenticated users can access secure routes

Login is required to interact with private data

🧱 Feature-Based Folder Structure

Each domain (e.g., Address, Job, Department , Auth ) is structured into its own feature module

🧩 CRUD Operations

Full Create, Read, Update, Delete support for:

Address

Job

Department

🧾 Forms with Validations

Email field validation (must be valid format)

Phone number validation (must match phone pattern)

📦 Popup Dialogs for All Actions

Add Address / Job / Department

Edit existing entries

Confirm Delete

🔍 Search Functionality

Users can search using all available fields in Address

🎨 Bootstrap 5 Styling

Clean and responsive UI using Bootstrap classes
