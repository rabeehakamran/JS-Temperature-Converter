const express = require("express");
const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius
} = require("./src/converter");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Temperature Converter API is Running!");
});

// /c-to-f?c=25
app.get("/c-to-f", (req, res) => {
  const c = parseFloat(req.query.c);
  const result = celsiusToFahrenheit(c);
  res.json({ fahrenheit: result });
});

// /f-to-c?f=77
app.get("/f-to-c", (req, res) => {
  const f = parseFloat(req.query.f);
  const result = fahrenheitToCelsius(f);
  res.json({ celsius: result });
});

// /c-to-k?c=25
app.get("/c-to-k", (req, res) => {
  const c = parseFloat(req.query.c);
  const result = celsiusToKelvin(c);
  res.json({ kelvin: result });
});

// /k-to-c?k=300
app.get("/k-to-c", (req, res) => {
  const k = parseFloat(req.query.k);
  const result = kelvinToCelsius(k);
  res.json({ celsius: result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
