# 📌 Full-Stack Application Setup

Welcome to the **Full-Stack Application**! This project is built using **TypeScript** for both the frontend and backend. Follow the steps below to set up and run the project on your local machine. 🚀

---

## 📥 Clone the Repository
To get started, clone the repository using Git or download the source code directly from GitHub.

```bash
# Clone the repository
git clone https://github.com/lakshaypunia/login-form.git

# Move into the project directory
cd login-form
```

Alternatively, you can **download the code directly** from GitHub as a ZIP file and extract it.

---

## 🌟 Frontend Setup
The frontend is built using **React with TypeScript**.

1. **Open a terminal** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install --force
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

This will start the frontend server at `http://localhost:5173` (or another available port).

---

## 🔥 Backend Setup
The backend is powered by **Node.js, Express, TypeScript, and Prisma (PostgreSQL)**.

1. **Open another terminal** and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a `.env` file** in the `backend` directory and add your database connection URL:
   ```
   DATABASE_URL=your_database_connection_string
   ```
4. **Run Prisma migrations**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. **Start the backend server**:
   ```bash
   node serer.js
   ```

This will start the backend server at `http://localhost:3001`.

---

## ⚡ Technologies Used
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL
- **Package Manager**: npm

---

## 🎯 Project Structure
```
project-root/
│── frontend/      # React frontend (TypeScript)
│── backend/       # Node.js backend (TypeScript, Express, Prisma)
│── README.md      # Project setup instructions
```

---

## ✅ Running the Full-Stack Application
1. Start the **frontend**: `npm run dev` (inside `frontend` folder)
2. Start the **backend**: `npm run dev` (inside `backend` folder)
3. Ensure the **database** is set up correctly with Prisma.
4. Open `http://localhost:5173` in your browser and start using the app! 🎉

---

## 🔗 Useful Commands
| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npx prisma generate` | Generate Prisma client |
| `npx prisma db push` | Push database schema |

---

## 💡 Contributing
Feel free to open issues or pull requests for improvements. Happy coding! 😊

