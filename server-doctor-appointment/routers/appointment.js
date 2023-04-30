const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

//Create a new Appointment
router.post('/appointments', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Get All Appointments
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.send(appointments);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Get specific Appointment for some Appointment ID
router.get('/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).send();
        }
        res.send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Update specific Appointment for some Appointment ID
router.patch('/appointments/:id/update', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) {
            return res.status(404).send();
        }
        res.send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Delete specific appointment for some Appointment ID
router.delete('/appointments/:id/delete', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).send();
        }
        res.send(appointment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
