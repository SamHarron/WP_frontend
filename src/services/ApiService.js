class ApiService {

    constructor(api) {
        this.api = api
    }

    getWorkouts = () => fetch(this.api + "/workouts").then(res => res.json())
    getExercises = () => fetch(this.api + "/exercises").then(res => res.json())

    createWorkout = (newWorkout) => {
    return fetch(this.api + "/workouts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWorkout),
      })
      .then(response => response.json())
    }

    createExercise = (newExercise) => {
      return fetch(this.api + "/exercises", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newExercise),
        })
        .then(response => response.json())
      }
}