# Node.js Exercise 1: Products API

This project is a Node.js REST API for managing products in a MySQL database, as specified in Exercise N of the Node.js workshops.

## Project Structure

```
Node1/
├── index.js           # Main application file
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Dependency lock file
├── node_modules/      # Installed dependencies
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## Features

- **CRUD Operations for Products:**
  - Create: Add new products to the database
  - Read: Retrieve all products or a single product by ID
  - Update: Modify existing product details
  - Delete: Remove products from the database

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL** - Database for storing product information
- **Nodemon** - Development tool for automatic server restart

## Database Setup

1. Create a MySQL database named `node_db`
2. Create a `products` table with the following structure:
   ```sql
   CREATE TABLE products (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DECIMAL(10,2) NOT NULL,
     description TEXT
   );
   ```

## API Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| POST   | /product     | Add a new product        |
| GET    | /product     | Retrieve all products    |
| GET    | /product/:id | Retrieve a product by ID |
| PUT    | /product/:id | Update a product by ID   |
| DELETE | /product/:id | Delete a product by ID   |

## Installation and Setup

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Configure MySQL connection:**
   Ensure MySQL is running on your machine with the following configuration:

   - Host: localhost
   - User: root
   - Password: (empty)
   - Database: node_db

3. **Run the application:**
   ```powershell
   npm start
   ```
   The server will start on port 3000.

## Testing API Endpoints

You can use tools like Postman to test the API endpoints:

1. **Add Product (POST /product)**

   - Body: JSON object with name, price, and description

   ```json
   {
     "name": "Test Product",
     "price": 19.99,
     "description": "This is a test product"
   }
   ```

2. **Get All Products (GET /product)**

   - No body required

3. **Get Product by ID (GET /product/:id)**

   - Replace `:id` with the actual product ID

4. **Update Product (PUT /product/:id)**

   - Replace `:id` with the actual product ID
   - Body: JSON object with name, price, and description

   ```json
   {
     "name": "Updated Product",
     "price": 29.99,
     "description": "This is an updated product"
   }
   ```

5. **Delete Product (DELETE /product/:id)**
   - Replace `:id` with the actual product ID
