import { config } from "dotenv";
import { App } from "./app";
config()
const app = new App(process.env.PORT || 8080)

app.initServer()