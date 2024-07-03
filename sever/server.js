const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('admin123@doctorlist.obsscy2.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true });

const appointmentSchema = new mongoose.Schema({
    doctor: String,
    name: String,
    mobile: String,
    date: String,
    time: String,
    symptom: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes
app.post('/appointments', async (req, res) => {
    const { doctor, name, mobile, date, time, symptom } = req.body;
    const newAppointment = new Appointment({ doctor, name, mobile, date, time, symptom });

    try {
        await newAppointment.save();
        res.status(201).send('Appointment booked successfully');
    } catch (error) {
        res.status(500).send('Error booking appointment');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
