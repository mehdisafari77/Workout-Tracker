const mongoose = require("mongoose")



const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    excersises: [{
        type: {
            type: String,
            required: "You must enter an excersise type"
        },
        name: {
            type: String,
            required: "You must enter a name"
        },
        duration: {
            type: Number,
            required: "You must enter an excersise duration"
        },
        weight: {
            type: Number,
            // required: "You must enter a weight"
        },
        reps: {
            type: Number,
            // required: "You must enter a number"
        },
        sets: {
            type: Number,
            // required: "You must enter sets"
        },
        distance: {
            type: Number,
            // required: "You must enter sets"
        }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema)


module.exports = Workout