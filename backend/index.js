const express = require('express')
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const faqRoutes = require('./routes/faqRoutes');

//morgan to log requests to a file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'request.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());
app.use(helmet());
app.use(cors());

mongoose.connect(process.env.DB_STRING)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting to Database :', err));
  
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/faqs', faqRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on port : ${PORT}`);
})