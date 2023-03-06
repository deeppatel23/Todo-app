const express = require("express");
const app = express();
const sequelize = require("./app/config/database");
const todoRoutes = require("./app/routes/todo.routes");

// Connect to the database
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
