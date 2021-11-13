# Workout-Tracker

## Summary
This is a workout tracker app, you can enter your workouts, and track the data in your dashboard.

## Link To Deployed App
https://polar-badlands-25931.herokuapp.com/#

## Screenshot Of Main Screen


## Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)
* [Expres.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/master/index.html)
* [mongodb](https://www.mongodb.com/)

## Installation Steps For Local Running
1. Clone project.
2. Open terminal and run these commands in order
    - npm install
    - npm run seed
    - npm start

## Code Snippet Getting One Workout
```javascript
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

```

## Author

* **Mehdi Safari**

- [Link to Portfolio Site](https://mehdisafari77.github.io/Basic-Bio/)
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
