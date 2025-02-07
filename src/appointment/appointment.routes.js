import { Router } from "express";
import { listarCitas, saveAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/user/:uid",listarCitas)
export default router;