class Workout {

    static all = []
    constructor(data){
        this.workout = data
        this.constructor.all.push(this)
    }

    renderShow = () => {
        console.log(this)
    }
    renderWorkout = () => {
        const { title, date, message, id} = this.workout
        document.getElementById("workout-container").innerHTML += `
        <div class="workout-card" data-id=${id}>
         <p class="title">${title}
         <p class="date">${date}
         <p class="message">${message}
        </div>`
    }

    static find = (id) => this.all.find(workout => workout.workout.id == id)

    static handleClick = (e) => {
       if (e.target.classList.contains("title") || e.target.classList.contains("date")){
       const id = e.target.closest(".workout-card").dataset.id
       this.find(id).renderShow()
       }
    }

    static renderIndex = () => {
        const workoutContainer = document.createElement("div")
        workoutContainer.id="workout-container"
        document.getElementById("main").appendChild(workoutContainer)
        this.all.forEach(workout => workout.renderWorkout())
        workoutContainer.addEventListener("click", this.handleClick)
    }
    static getWorkouts = () => {
        api.getWorkouts().then(workouts => {
            workouts.forEach(workout => new Workout(workout))
            this.renderIndex()
        })
    }
}

