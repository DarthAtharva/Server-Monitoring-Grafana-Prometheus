import express from "express";
import client from "prom-client";
import { heavyTask } from "./tasks/heavyTask.js";

const server = express();
const PORT = process.env.PORT || 8000;

//Prometheus client setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({
    register : client.register
});

server.get("/", (req, res) => {
    res.send("Hello there!");
});

server.get("/slow", async (req, res) => {

    try{

        const timeTaken = await heavyTask();

        return res
            .status(200)
            .json({

                status: "Success",
                message: `Heavy task completed in ${timeTaken}`

            });

    }catch{

        return res
            .status(500)
            .json({

                status: "Error",
                error: "Internal Server Error"

            })
    }
})


server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})