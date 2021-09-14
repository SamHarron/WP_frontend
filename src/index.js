console.log("Workout Planner 2021")

fetch("http://localhost:3000/workouts").then(res => res.json()).then(console.log)