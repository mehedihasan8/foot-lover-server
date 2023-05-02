const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const chef = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chef);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const SelectedChef = chef.find((c) => c.id === id);
  res.send(SelectedChef);
});

// app.get("/", (req, res) => {
//   res.send("Food Lovers Server runnig");
// });

app.listen(port, () => {
  console.log(`Food Lovers Server runnig ${port}`);
});
