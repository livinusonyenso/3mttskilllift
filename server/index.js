import express from "express"
const app = express()
import * as dotenv from "dotenv"
dotenv.config()
import logger from "morgan"
import cors from "cors"

import authRoute from "./routes/authRoute.js"
import mongoose from "mongoose"
import session from "express-session"
import passport from "passport"
import { loginStrategy } from "./config/authConfig.js"

const db = process.env.NODE_ENV === "development" ? process.env.LOCAL_CONN_URI : process.env.LIVE_CONN_URI

async function main(){
    const conn = await mongoose.connect(db)

    if (conn) console.log("Database successfully connected!");
    
}

main().catch(err => console.error(err))

app.use(logger("dev"))
app.use(cors())
app.use(express.json())


loginStrategy()
app.use(passport.initialize());

app.use("/api/v1/auth", authRoute)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
})