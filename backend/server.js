/* eslint-disable no-undef */
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 4000;
const apiKey = "4d75b261b2de9fecb380b4d244b1da6c";

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Endpoint to get provinces
app.get("/api/province", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/province",
      {
        headers: { key: apiKey },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get cities by province
app.get("/api/city", async (req, res) => {
  const { province } = req.query;
  try {
    const response = await axios.get(
      `https://api.rajaongkir.com/starter/city?province=${province}`,
      {
        headers: { key: apiKey },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to calculate shipping cost
app.post("/api/cost", async (req, res) => {
  const { origin, destination, weight, courier } = req.body;
  try {
    const response = await axios.post(
      "https://api.rajaongkir.com/starter/cost",
      new URLSearchParams({ origin, destination, weight, courier }),
      {
        headers: {
          key: apiKey,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
