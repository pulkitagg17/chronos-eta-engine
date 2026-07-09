import { Router } from "express";
import { ETAEngine } from "../services/ETAEngine.js";

const router = Router();
const etaEngine = new ETAEngine();

router.post("/", (req, res) => {
    // const eta = etaEngine.calculateETA();
    const {restaurant, destination} = req.body;
    
    const eta = etaEngine.calculateETA(
        restaurant,
        destination
    );

    res.json({ eta });
});

export default router;