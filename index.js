// index.js
const express = require("express");
const { connectDB } = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const { initializeDatabase } = require("./models/migrate");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);
app.get("/welcome", async (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, async () => {
  await connectDB();
  await initializeDatabase();
  console.log(`Server running on http://localhost:${PORT}`);
});
