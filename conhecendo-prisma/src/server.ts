import express from "express";
import userRouter from "./routes/users";
import postRouter from "./routes/posts";

const app = express()

app.use(express.json())
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)

app.listen(5000, () => console.log("Servidor iniciado!"))

