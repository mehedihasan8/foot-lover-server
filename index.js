const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

const chef = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chef);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const SelectedChef = chef.find((singeChef) => singeChef.id == id);
  res.send(SelectedChef);
});

app.listen(port, () => {
  console.log(`Food Lovers Server runnig ${port}`);
});
