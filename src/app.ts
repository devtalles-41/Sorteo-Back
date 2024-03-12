import express from "express";
import { envs } from "./config";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*", //Por ahora, pero luego cambiar
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const server = app.listen(envs.port, () => {
  console.log("Server is running on port", envs.port);
});

server.on("error", (error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
