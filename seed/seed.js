let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParse: true,
    useFindAndModify: false
});

let workoutSeed = [
    {
        day: new Date().setDate(new Date().getDate()-10),
        exercises: [
            {
                type:"Resistance",
                name:"Bicep Curl",
                duration:10,
                weight: 20,
                reps: 10,
                sets: 5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-9),
        exercise:[
            {
                type:"Resistance",
                name:"Lateral Pull",
                duration: 20,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-8),
        exercises:[
            {
                type:"Resistance",
                name: "Push Press",
                duration: 25,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-7),
        exercises:[
            {
                type:"Cardio",
                name:"Run",
                duration: 30,
                distance: 5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-6),
        exercises:[
            {
                type:"Resistance",
                name:"Bench Press",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-5),
        exercises:[
            {
                type:"Resistance",
                name:"Squats",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-4),
        exercises:[
            {
                type:"Resistance",
                name:"Incline Press",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-3),
        exercises:[
            {
                type:"Resistance",
                name:"Bench Press",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-2),
        exercises:[
            {
                type:"Resistance",
                name:"Kettlebell Swings",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-1),
        exercises:[
            {
                type:"Resistance",
                name:"Leg Press",
                duration: 30,
                weight: 100,
                reps:10,
                sets:5
            }
        ]
    }
];

db.Workout.deleteMany({})
.then(() => db.Workout.collection.insertMany(workoutSeed))
.then(data => {
    console.log(data.result.n + "Insert Successful!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});