# La Cueva Gamer

## Overview
La Cueva Gamer is a single-page application designed for gamers to browse and purchase gaming products. The application features a user-friendly interface with a welcome page, a sales page that includes a shopping cart, and a secure login system to differentiate between regular users and administrators.

## Features
- **Welcome Page**: A landing page that introduces users to La Cueva Gamer.
- **Sales Page**: A page where users can view and purchase products. It includes a shopping cart for managing selected items.
- **User Authentication**: A login system that allows users to register and log in. Regular users can make purchases, while administrators have additional privileges.
- **Admin Panel**: An interface for administrators to manage product stock, including adding, updating, and deleting products.

## Project Structure
The project is organized into the following main directories and files:

```
TP-LCG-VIDAL
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── http
│   └── test.http
├── prisma
│   ├── schema.prisma
│   └── migrations
│       ├── migration_lock.toml
│       └── 20250613145801_init
│           └── migration.sql
├── src
│   ├── server.js
│   ├── controllers
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   └── auth.controller.js
│   ├── middlewares
│   │   ├── validateId.js
│   │   ├── validateSchema.js
│   │   └── auth.middleware.js
│   ├── provider
│   │   └── prisma.provider.js
│   ├── routes
│   │   ├── user.routes.js
│   │   ├── product.routes.js
│   │   └── auth.routes.js
│   ├── schemas
│   │   ├── user.schema.js
│   │   ├── product.schema.js
│   │   └── auth.schema.js
│   ├── services
│   │   ├── user.service.js
│   │   ├── product.service.js
│   │   └── auth.service.js
│   └── client
│       ├── public
│       │   └── index.html
│       └── src
│           ├── App.jsx
│           ├── main.jsx
│           ├── components
│           │   ├── Navbar.jsx
│           │   ├── WelcomePage.jsx
│           │   ├── SalesPage.jsx
│           │   ├── ShoppingCart.jsx
│           │   ├── LoginPage.jsx
│           │   ├── AdminPanel.jsx
│           │   └── ProductList.jsx
│           ├── contexts
│           │   ├── AuthContext.jsx
│           │   └── CartContext.jsx
│           ├── hooks
│           │   └── useAuth.js
│           └── styles
│               └── main.css
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Create a `.env` file and configure your environment variables (e.g., database connection strings).
4. Run `docker-compose up` to start the application.
5. Access the application in your web browser.

## Technologies Used
- Node.js
- Express.js
- Prisma ORM
- React.js
- Docker

## Contribution
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.