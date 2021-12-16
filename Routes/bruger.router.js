import express from "express";
import BrugerController from "../Controllers/bruger.controller.js";

const router = express.Router();
//Javascript class (new)
const controller = new BrugerController();

//Kalder routes med controller functions
router.get('/api/bruger', (req, res) => { controller.list(req, res) });
router.get('/api/bruger/:id([0-1]*)', (req, res) => { controller.get(req, res) });
router.post('/api/bruger', (req, res) => { controller.create(req, res) });
router.put('/api/bruger', (req, res) => { controller.update(req, res) });
router.delete('/api/bruger', (req, res) => { controller.delete(req, res) });
//Søgefuntikon 
router.get('/api/bruger/search', (req, res) => { controller.search(req, res) });





export { router }