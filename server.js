const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const Budget = require('./models/budget')
const email = require('./controllers/email')

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const budgetRouter = require('./routes/budgets');
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
const cors = require('cors')
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/budgets', budgetRouter);
app.use('/api/users', userRouter);

Budget.find({}, function(err, budgets){
    email.sendEmail(budgets, 'Jaice561@gmail.com')
    })

    app.listen(port, function() {
        console.log(`Express app running on port ${port}`)
      });
