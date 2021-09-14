class Workout {

    static all = []
    constructor(data){
        this.workout = data
        this.constructor.all.push(this)
    }

    renderWorkout = () => {
        const { title, date, message} = this.workout
        document.getElementById("workout-container").innerHTML += `
        <div class="workout-card">
         <p class="title">${title}
         <p class="date">${date}
         <p class="message">${message}
        </div>`
    }

    static renderIndex(){
        const workoutContainer = document.createElement("div")
        workoutContainer.id="workout-container"
        document.getElementById("main").appendChild(workoutContainer)
        this.all.forEach(workout => workout.renderWorkout())
    }
    static getWorkouts(){
        api.getWorkouts().then(workouts => {
            workouts.forEach(workout => new Workout(workout))
            this.renderIndex()
        })
    }
}

