# EasyTake - E-Commerce Platform

An e-commerce platform built with React (Vite) frontend and Express + MongoDB backend.

## Tech Stack

### Frontend

- **Framework**: React 18.2
- **Build Tool**: Vite 5.1
- **UI Libraries**:
  - Chakra UI
  - Mantine
  - Tailwind CSS
  - Flowbite React
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios + Custom fetch hook
- **Animation**: Framer Motion
- **Authentication**: JWT-based auth with Context API

### Backend

- **Runtime**: Node.js
- **Framework**: Express 4.18
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcryptjs
- **Validation**: express-validator
- **Dev Tool**: nodemon

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (connection string is already configured)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Project
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

The backend server will run on **http://localhost:4000**

**Note**: The backend uses nodemon, so it will auto-reload on file changes.

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on **http://localhost:3000** and automatically open in your browser.

## Running the Full Application

**You need to run both frontend and backend simultaneously:**

**Terminal 1 - Backend:**

```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm start
```

Once both are running:

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## API Endpoints

### User Authentication

- **POST** `/users/signup` - Register a new user

  - Body: `{ name, email, password }`
  - Returns: `{ userId, token }`

- **POST** `/users/login` - Login existing user
  - Body: `{ email, password }`
  - Returns: `{ userId, token }`

### Products

- **POST** `/products/` - Add item to cart
  - Body: `{ name, description, price }`
  - Validation: name required, description min 5 chars, price must be integer

## How Frontend & Backend Connect

1. **CORS Configuration**: Backend has CORS enabled for all origins (`*`), allowing the frontend to make cross-origin requests.

2. **API Calls**: Frontend uses a custom HTTP hook (`useHttpClient`) that wraps the Fetch API to communicate with the backend at `http://localhost:4000`.

3. **Authentication Flow**:

   - User signs up/logs in via frontend
   - Backend returns JWT token and userId
   - Frontend stores token in AuthContext (localStorage)
   - Token is included in subsequent authenticated requests via Authorization header

4. **State Management**:
   - `AuthContext` - Manages user authentication state
   - `CartContext` - Manages shopping cart state

## Project Structure

```
Project/
├── backend/
│   ├── controllers/      # Request handlers
│   │   ├── users-controllers.js
│   │   └── items-controllers.js
│   ├── middleware/       # Auth middleware
│   │   └── check-auth.js
│   ├── models/          # Mongoose schemas
│   │   ├── user.js
│   │   ├── Item.js
│   │   └── http-error.js
│   ├── routes/          # API routes
│   │   ├── users-routes.js
│   │   └── item-routes.js
│   ├── app.js           # Main server file
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/           # Sign in/up pages
│   │   │   ├── navigation/     # Navbar components
│   │   │   ├── Mainpage/       # Home page sections
│   │   │   │   ├── Hero/
│   │   │   │   └── Products/
│   │   │   ├── pages/          # Main pages
│   │   │   │   ├── Cart/
│   │   │   │   ├── CheckOut/
│   │   │   │   └── ProductPage/
│   │   │   ├── UI/             # Reusable UI components
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   └── Footer/
│   │   ├── context/            # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── assets/             # Images and static files
│   │   ├── App.jsx             # Main app component
│   │   └── index.jsx           # Entry point
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## Available Routes (Frontend)

### Public Routes

- `/` - Home page
- `/sign-up` - User registration
- `/signin` - User login
- `/product-item/:id` - Product details page
- `/cart` - Shopping cart
- `/checkout` - Checkout page

### Protected Routes (After Login)

- `/signed-in` - Main page for authenticated users
- All routes redirect to home if not authenticated

## Build for Production

### Frontend

```bash
cd frontend
npm run build
```

This creates an optimized build in the `frontend/dist` directory.

To preview the production build:

```bash
npm run serve
```

### Backend

The backend is production-ready. For deployment:

1. Set up environment variables for MongoDB connection string
2. Replace `nodemon` with `node app.js` in production
3. Configure proper CORS origins (remove `*` wildcard)
4. Add rate limiting and security middleware

## Database

The application uses **MongoDB Atlas** with a pre-configured connection string in `backend/app.js`.

**Database Name**: `easytake`

**Collections**:

- `users` - User accounts
- `items` - Product items

## Development Notes

- Frontend uses Vite for fast HMR (Hot Module Replacement)
- Backend uses nodemon for auto-restart on file changes
- JWT tokens are used for authentication
- Passwords are hashed using bcryptjs
- Form validation is handled by express-validator on backend

## Troubleshooting

### Port already in use

If port 3000 or 4000 is already in use:

**Frontend**: Edit `vite.config.js` and change the port number

```javascript
server: {
  port: 3001, // Change to different port
}
```

**Backend**: Edit `app.js` line 45 and change `4000` to another port

### MongoDB Connection Issues

If you see MongoDB connection errors, check:

1. Internet connection (requires access to MongoDB Atlas)
2. MongoDB Atlas cluster is running
3. IP whitelist includes your current IP address

### Dependencies Installation Issues

If `npm install` fails:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Ensure you're using Node.js v14 or higher

## License

This is a graduation project for educational purposes. 2024
