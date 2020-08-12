"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Appointments_1 = __importDefault(require("../models/Appointments"));
var AppointmentsRepository = /** @class */ (function () {
    function AppointmentsRepository() {
        this.appointments = [];
    }
    AppointmentsRepository.prototype.create = function (provider, date) {
        var appointment = new Appointments_1.default(provider, date);
        this.appointments.push(appointment);
        return appointment;
    };
    return AppointmentsRepository;
}());
exports.default = AppointmentsRepository;
