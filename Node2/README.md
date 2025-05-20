# Node.js Exercise 2: Express Routes

This folder contains an Express.js application (`index.js`) as per Exercise O: Node.js 2.

## Description

The application sets up a simple web server with the following routes:

- `/`: Home page
- `/about`: About Us page
- `/contact`: Contact Us page
- `/products`: Products page

## Instructions from `nodejs_workshops.markdown`

Your task is to create a Node.js application using Express.

Start by installing Express and then create a file named `index.js`. In this file, define routes for the following pages:

- Home: The main landing page.
- About: Information about the application or company.
- Contact Us: A page with contact information.
- Products: A page to showcase available products.

Ensure each route renders the corresponding page when accessed. Finally, run the application to verify that the routes are working correctly and that the application functions as expected.

## Running the Application

1.  **Install dependencies:**
    Open your terminal in the `Node2` directory and run:

    ```bash
    npm install express
    ```

2.  **Start the server:**
    Run the following command in the `Node2` directory:

    ```bash
    node index.js
    ```

3.  Open your web browser and navigate to `http://localhost:3000` to see the home page. You can also visit:
    - `http://localhost:3000/about`
    - `http://localhost:3000/contact`
    - `http://localhost:3000/products`
