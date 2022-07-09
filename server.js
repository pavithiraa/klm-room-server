const express = require("express");

const app = express();

const path = require("path");

const dbConfig = require("./db");
require('dotenv').config();
const roomsRoute = require("./routes/roomsRoute.js");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use(express.json());
const cors = require("cors");

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);

app.use(
    cors({
      origin: "*",
    })
  );

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`server running on port ${port}`));
