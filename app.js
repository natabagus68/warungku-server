const express = require("express");
const app = express();
const router = require("./routers");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.listen(3000, () => console.log("server running at port", 3000));
