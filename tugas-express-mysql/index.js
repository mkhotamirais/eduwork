import express from "express";
import cors from "cors";
import router from "./products/router.js";

const app = express();

app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => console.log("App is running on port 3000"));
