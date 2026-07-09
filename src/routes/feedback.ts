import { Router } from "express";

const router = Router();

router.post("/", (req,res)=>{
    res.json({
        message: "Feedback received"
    });
});

export default router;