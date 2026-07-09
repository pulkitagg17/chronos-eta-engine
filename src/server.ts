import express from "express";

import etaRouter from "./routes/eta.js";
import feedbackRouter from "./routes/feedback.js";

const app = express();

app.use(express.json());

app.use("/api/eta", etaRouter);
app.use("/api/feedback", feedbackRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})