const connection = require("../config/db");
const calculateDistance = require("../utils/distanceCalculator");

const addSchool = (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || latitude == null || longitude == null) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (
            typeof latitude !== "number" ||
            typeof longitude !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message: "Latitude and Longitude must be numbers"
            });
        }

        const query =
            "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

        connection.query(
            query,
            [name, address, latitude, longitude],
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Database Error",
                        error: err
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "School added successfully"
                });
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const listSchools = (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({
                success: false,
                message: "Latitude and Longitude are required"
            });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const query = "SELECT * FROM schools";

        connection.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });
            }

            const schoolsWithDistance = results.map((school) => {
                const distance = calculateDistance(
                    userLat,
                    userLon,
                    school.latitude,
                    school.longitude
                );

                return {
                    ...school,
                    distance: distance.toFixed(2) + " KM"
                };
            });

            schoolsWithDistance.sort(
                (a, b) =>
                    parseFloat(a.distance) - parseFloat(b.distance)
            );

            res.status(200).json({
                success: true,
                schools: schoolsWithDistance
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    addSchool,
    listSchools
};