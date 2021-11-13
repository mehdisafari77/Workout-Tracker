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

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, 
        {$push: { exercises: body }}, 
        {new: true, runValidators: true})
        .then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
})