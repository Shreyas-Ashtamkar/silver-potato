const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const appointmentRouter = require('./routers/appointment');

app.use(cors({
    origin: '*'
}));

mongoose.connect('mongodb://localhost:27017/appointment-booking-app');

app.use(express.json());
app.use(appointmentRouter);

app.listen(8000, () => console.log('Server started on port 8000'));
