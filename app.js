const path = require('path'); // initialize core module path

const express = require('express'); //-->  initialize express
const bodyParser = require('body-parser'); // --> initialize body-parser

const app = express(); //--> initialize app to use experss

const adminRouters = require('./routes/admin'); // import admin.js file
const shopRoutes = require('./routes/shop'); // import shop.js file

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Outsource routes
// Adding '/admin' like a filter, so that only that routes go to adminRouters
app.use('/admin', adminRouters); // exporting router object to use like a middleware .
app.use(shopRoutes); // exporting router object to use like a middleware

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // send 404 error page
});

app.listen(3000); //--> listen server in port
