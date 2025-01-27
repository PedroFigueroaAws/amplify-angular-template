import express from "express";
import bodyParser from "body-parser";
import { RiskAggregate } from "./domain/aggregates/RiskAggregate";

const app = express();
app.use(bodyParser.json());

const riskAggregate = new RiskAggregate();

app.post("/risks", (req, res) => {
  const { id, description, status } = req.body;
  riskAggregate.addRisk(id, description, status);
  res.status(201).send("Risk added");
});

app.get("/risks", (req, res) => {
  res.json(riskAggregate.getRisks());
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
