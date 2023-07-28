const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const allowedOrigins = ['http://localhost:3000', 'https://lets-travel-virid.vercel.app'];
const app = express();


app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
     res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors());

//Initialize Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Import Routes
const usersRoute = require("./routes/users");
const signupRoute = require("./routes/signup");
const guestRoute = require("./routes/guest");
const viewRoute = require("./routes/view");
const authRoute = require("./routes/auth");
//Use Routes
app.use("/users", usersRoute);
app.use("/signup", signupRoute);
app.use("/guest", guestRoute);
app.use("/view", viewRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//Database Connection
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("Server Started on port ", port);
});