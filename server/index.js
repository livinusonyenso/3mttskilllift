import express from "express"
const app = express()
import * as dotenv from "dotenv"
dotenv.config()
import logger from "morgan"


import authRoute from "./routes/authRoute.js"


app.use(logger("dev"))

app.use("/api/v1/auth/", authRoute)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
})