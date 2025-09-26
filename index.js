import express from "express";
import { heavyTask } from "./tasks/heavyTask.js";

const server = express();
const PORT = process.env.PORT || 8000;

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