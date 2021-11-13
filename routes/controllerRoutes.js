const router = require("express").Router
const Workout = require("../models/Workout")


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                $sum: "$exercises.duration"
            }
        }
    ]).then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})