import { queue } from "./Queue.js";
import { database } from "../repositories/Database.js";

export function startWorker() {

    setInterval(() => {

        const job = queue.getNext();

        if (!job) {

            return;

        }

        console.log("Processing Job...");

        database.updatePrepTime(

            job.restaurant,

            job.actualPrepTime

        );

        console.log("Database Updated");

    }, 3000);

}