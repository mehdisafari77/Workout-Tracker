const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// const PORT = 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require("./routes/controllerRoutes"))
app.use(require("./routes/viewRoutes"))

// routes
// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });