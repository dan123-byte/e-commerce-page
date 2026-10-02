# TinkrTech — E-commerce Store

TinkrTech is a frontend e-commerce web application for browsing and purchasing tech accessories through a modern, retro-inspired storefront. It features a product catalog, shopping cart management, checkout form, and order confirmation experience.

## Features

* **Product Catalog** – Browse tech accessories, including headphones, keyboards, mice, smartwatches, speakers, and gaming controllers.
* **Shopping Cart** – Add products, adjust quantities, and remove items.
* **Cart Persistence** – Retain cart contents across page refreshes using browser `localStorage`.
* **Checkout Form** – Enter customer details, contact information, shipping address, and a demo payment method.
* **Order Summary** – Review selected products, quantities, and the calculated order total before placing an order.
* **Order Confirmation** – Generate a unique order number and display a confirmation after checkout.
* **Responsive Design** – Browse the storefront on desktop and smaller screens.
* **Modern Retro-Inspired UI** – A distinctive design using warm cream, forest green, and orange colors.

## Tech Stack

* React
* JavaScript
* HTML5
* CSS3
* Vite
* Browser Local Storage

## Checkout and Data Storage

This project demonstrates a frontend checkout flow. It validates customer input, calculates the order total, generates an order number, displays an order confirmation, and clears the shopping cart.

Cart contents are saved in browser `localStorage`. Completed orders are currently held in application state and are not permanently stored in an order database.

**Note:** This is a demo storefront. It does not process real payments, submit orders to a backend, or provide a production order-management system.

## Project Purpose

TinkrTech was developed as a portfolio practice project to strengthen skills in React component development, state management, shopping cart functionality, form validation, price calculations, browser storage, and responsive UI design.