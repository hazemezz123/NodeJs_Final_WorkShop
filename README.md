# Node.js Workshop Projects

This repository contains two Node.js projects developed as part of a workshop series. Each project demonstrates different aspects of Node.js development with Express.

## Table of Contents

- [Project Overview](#project-overview)
- [Projects](#projects)
  - [Node1: RESTful API](#node1-restful-api-with-express--mysql)
  - [Node2: Express Routing](#node2-simple-express-web-server)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)

## Project Overview

This workspace contains solutions for the Node.js workshops as outlined in the `nodejs_workshops.markdown` file. The exercises focus on fundamental Node.js concepts including:

- Building RESTful APIs
- Database integration
- Express routing
- Server configuration
- HTTP methods

## Projects

### Node1: RESTful API with Express & MySQL

Node1 is a **Node.js** project that demonstrates how to build a RESTful API using [Express](https://expressjs.com/) and [MySQL](https://www.mysql.com/).  
It provides endpoints to **create**, **read**, **update**, and **delete** products from a MySQL database, making it a practical example of backend CRUD operations.

**Key Features:**

- Express.js server setup
- MySQL database integration
- Full CRUD API for products
- JSON response formatting

[Go to Node1 Project →](./Node1)

### Node2: Simple Express Web Server

Node2 is a **Node.js** project that showcases a simple [Express](https://expressjs.com/) web server with multiple routes:

- **Home**: Main landing page
- **About**: Information page
- **Contact**: Contact details page
- **Products**: Product showcase page

Each route returns a basic HTML response, illustrating how to set up and handle different web pages using Express.

[Go to Node2 Project →](./Node2)

## Getting Started

To run either project:

1. Navigate to the project directory:

   ```powershell
   cd Node1  # or cd Node2
   ```

2. Install dependencies:

   ```powershell
   npm install
   ```

3. Start the server:
   ```powershell
   npm start
   ```

See each project's dedicated README for more specific instructions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- For Node1 only: [MySQL](https://www.mysql.com/) server running locally

## Repository Structure

```
nodejs/
├── Node1/                  # CRUD API with MySQL
│   ├── index.js            # Main application file
│   ├── package.json        # Project dependencies
│   └── README.md           # Project documentation
│
├── Node2/                  # Express routes demo
│   ├── index.js            # Main application file
│   ├── package.json        # Project dependencies
│   └── README.md           # Project documentation
│
├── .gitignore              # Git ignore file
├── nodejs_workshops.markdown  # Workshop instructions
└── README.md               # This file
```

> _Explore both projects to learn about RESTful APIs and basic web routing with Express!_
