# 🚴 bike-store-Server

## 📌 Project Overview

The **Bike-store-Server-Backend** is a backend service built with **Node.js, Express, TypeScript, and MongoDB**. It provides a complete product and order management system for a bike store, allowing users to **create, retrieve, update, and delete products and orders** while ensuring data validation and integrity using **Mongoose** and **Zod**.

## 🛠 Technologies Used

- **Node.js** + **Express.js** - Backend framework
- **TypeScript** - Type safety
- **MongoDB + Mongoose** - Database & ODM
- **Zod** - Data validation

## ✨ Features

- 🛍 **Product Management:** Add, update, retrieve, and delete bikes with detailed specifications.
- 📦 **Inventory Management:** Automatically update stock levels when an order is placed.
- 🛒 **Order Management:** Create and manage customer orders with validation.
- 📊 **Revenue Calculation:** Calculate total revenue from all orders using MongoDB aggregation.
- ✅ **Data Validation:** Uses **Zod** and **Mongoose schema validation** for structured and secure data handling.
- 🔐 **Error Handling:** Centralized and structured error responses with clear messages.

---

## 🛠 Installation & Setup for locally

### **1️⃣ Prerequisites**

Ensure you have the following installed on your system:

- **Node.js**
- **MongoDB** (Local or Atlas connection)
- **npm or yarn**

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/ahsanTonmoy/bike-store-Server-Backend
cd bike-store-Server-Backend
```

### **3️⃣ Install Dependencies**

```sh
npm install  # or yarn install
```

### **4️⃣ Configure Environment Variables**

Create a **.env** file in the root directory and add your MongoDB connection string:

```env
database_url= add your mongoDB credentials
```

### **5️⃣ Run the Application**

#### 🚀 **For Development:**

```sh
npm run start:dev
```

#### 🔥 **For Production:**

```sh
npm run build && npm start:prod
```

---

## 🛠 API Endpoints

### **Product Routes**

| Method | Endpoint            | Description                         |
| ------ | ------------------- | ----------------------------------- |
| POST   | `/api/products`     | Create a new product                |
| GET    | `/api/products`     | Retrieve all products (with search) |
| GET    | `/api/products/:id` | Get a product by ID                 |
| PUT    | `/api/products/:id` | Update a product                    |
| DELETE | `/api/products/:id` | Delete a product                    |

### **Order Routes**

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | `/api/orders`         | Place a new order             |
| GET    | `/api/orders`         | Retrieve all orders           |
| GET    | `/api/orders/:id`     | Get an order by ID            |
| DELETE | `/api/orders/:id`     | Delete an order               |
| GET    | `/api/orders/revenue` | Get total revenue from orders |

---

THANK YOU

Happy Coding! 🚴‍♂️🔥
