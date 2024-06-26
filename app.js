require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectToDB = require("./config/db")

connectToDB();

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/v1", require("./routes/userRoutes"))
app.use("/api/v1", require("./routes/logotypeRoutes"))
app.use("/api/v1", require("./routes/favoritesRoutes"))




app.use(errorHandler);


app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
)