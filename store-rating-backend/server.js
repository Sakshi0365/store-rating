const express = require("express");
const cors = require("cors"); // Import cors
const db = require("./db"); // Import the database connection

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON data processing

// Import authentication routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
