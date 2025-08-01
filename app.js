
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

mongoose.connect("mongodb+srv://vedantparag123:u9TpGK1nSmT5z7Vo@todo1.qvigogk.mongodb.net/?retryWrites=true&w=majority&appName=todo1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

require('dotenv').config(); // Add this at the top


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
