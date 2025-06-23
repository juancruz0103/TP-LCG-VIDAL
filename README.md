La Cueva Gamer
Visión General
La Cueva Gamer es una aplicación de una sola página diseñada para que los gamers naveguen y compren productos de videojuegos. La aplicación presenta una interfaz fácil de usar con una página de bienvenida, una página de ventas que incluye un carrito de compras y un sistema de inicio de sesión seguro para diferenciar entre usuarios regulares y administradores.

Características
Página de Bienvenida: Una página de inicio que presenta a los usuarios La Cueva Gamer.

Página de Ventas: Una página donde los usuarios pueden ver y comprar productos. Incluye un carrito de compras para gestionar los artículos seleccionados.

Autenticación de Usuario: Un sistema de inicio de sesión que permite a los usuarios registrarse e iniciar sesión. Los usuarios regulares pueden realizar compras, mientras que los administradores tienen privilegios adicionales.

Panel de Administración: Una interfaz para que los administradores gestionen el stock de productos, incluyendo agregar, actualizar y eliminar productos.

Estructura del Proyecto
El proyecto está organizado en los siguientes directorios y archivos principales:

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

Instrucciones de Configuración
Clona el repositorio en tu máquina local.

Navega al directorio del proyecto.

Crea un archivo .env y configura tus variables de entorno (por ejemplo, las cadenas de conexión a la base de datos).

Ejecuta docker-compose up para iniciar la aplicación.

Accede a la aplicación en tu navegador web.

Tecnologías Utilizadas
Node.js

Express.js

Prisma ORM

React.js

Docker
