import express from "express";
import { router } from "./routes";
import { errorHandler } from "./middleware/error-handler"
const app = express()

app.use(express.json());

app.use("/api", router);
app.use(errorHandler)

const PORT = 3000

app.listen(PORT, () => console.log(`servidor iniciado em http://localhost:${PORT}`))