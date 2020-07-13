const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const path = require('path');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const budgetRouter = require('./routes/budgets');
const cors = require('cors')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/budgets', budgetRouter);
app.use('/api/users', userRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
