const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = [
      "https://lets-travel-virid.vercel.app", 
      "http://localhost:3000", 
      "http://127.0.0.1:5500" // add as many origins as you like.
    ];
    if (!origin) return callback(null, true);  
    if (allowedOrigins.indexOf(origin) === -1) {
      let msg = 'CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


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