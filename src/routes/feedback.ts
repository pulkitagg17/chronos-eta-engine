import { Router } from "express";
import { queue } from "../queue/Queue.js";

const router = Router();

router.post("/", (req, res) => {

    const {

        restaurant,

        actualPrepTime

    } = req.body;

    queue.add({

        restaurant,

        actualPrepTime

    });

    res.json({

        message: "Feedback queued"

    });

});

export default router;