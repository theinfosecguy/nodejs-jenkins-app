require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.json({ foo: "barbar" });
});

app.listen(PORT, () => {
	console.log(`Example app listening on PORT ${PORT}`);
});

module.exports = app;
