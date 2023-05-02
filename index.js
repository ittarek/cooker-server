const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/Chef.json");
const todayMenu = require("./data/TodayMenu.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("cooker is running");
});
// chef data
app.get("/chefData", (req, res) => {
  res.send(chefData);
});

// today Menu data
app.get("/todayMenu", (req, res) => {
  res.send(todayMenu);
});

app.listen(port, () => [console.log(`cooker api is running ${port}`)]);
