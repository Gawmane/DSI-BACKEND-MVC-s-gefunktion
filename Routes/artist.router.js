import express from "express";
import ArtistController from "../Controllers/artist.controller.js";



const router = express.Router();
//Javascript class (new)
const controller = new ArtistController();
//Kalder routes med controller functions
// router.get('/api/artists', (req, res) => {
//     res.status(200).send('Artist liste');
// });

//Kalder routes med controller functions
router.get('/api/artists', (req, res) => { controller.list(req, res) });
router.get('/api/artists/:id([0-9]*)', (req, res) => { controller.get(req, res) });
router.post('/api/artists', (req, res) => { controller.create(req, res) });
router.put('/api/artists', (req, res) => { controller.update(req, res) });
router.delete('/api/artists', (req, res) => { controller.delete(req, res) });

export { router }