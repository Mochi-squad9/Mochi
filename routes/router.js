import express from "express";
import dbController from "../controller/DBController.js";
import materials from "../controller/ApiMaterialsController.js";
import apiController from "./controller/ApiController.js"

const router = express.Router();

// View Model index route (frontend)
router.get('/', async (req, res, send) => {
    try {
        const statesData = await apiController.statesData();
        res.render('index', {
            title: "Mochi",
            version: "1.0.0",
            states: statesData,
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res, send) => {
    try {
        const stateId = req.body;
        const citiesData = await apiController.citiesData(stateId);
    } catch (err) {
        res.status(400).json(err)
    }
})

// View model form submit route
router.get('/cadastro', async (req, res) => {
    try {
        res.render('cadastro', {
            materials: await materials.materialsData(),
            title: "Mochi",
            version: "1.0.0"
        });
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/cadastro', (req, res) => {
    dbController.saveForm(req.body);
})

export default router;