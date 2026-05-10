const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const schoolRoutes = require("./src/routes/schoolRoutes");

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "School Management API Running"
    });
});

app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});