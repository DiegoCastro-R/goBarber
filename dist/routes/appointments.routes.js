"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var date_fns_1 = require("date-fns");
var appointmentsRouter = express_1.Router();
var AppointmentsRepository = new AppointmentsRepository();
appointmentsRouter.post('/', function (request, response) {
    var _a = request.body, provider = _a.provider, date = _a.date;
    var parsedDate = date_fns_1.startOfHour(date_fns_1.parseISO(date));
    var findAppointmentInSameDate = appointments.find(function (appointment) {
        return date_fns_1.isEqual(parsedDate, appointment.date);
    });
    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: 'This appointment is already booked' });
    }
    return response.json(appointment);
});
exports.default = appointmentsRouter;
