import express from "express";
import cors from "cors";

let whitelist = ["localhost", "localhost:3000", "localhost:4200"];
let corsOptions = {
  origin: whitelist,
};

const router = express.Router();
const server = express();
server.use(cors(corsOptions));
server.use(express.json());

router.get("/", (_req, res) => {
  res.send("App is running...");
});

export default server;
