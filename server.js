
const express = require("express")
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
const morgan = require("morgan");
app.use(morgan("dev"));

//routes
console.log("server.js", "Hello")
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//port
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(port, () => {
    console.log(
      `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
        .bgCyan.white
    );
  });