class Workout {

    static all = []
    constructor(data){
        this.workout = data
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { title, date, message } = this.workout
        document.getElementById("main").innerHTML = `
        <div class="workout-show" >
        <p class="title">${title}
        <p class="date">${date}
        </div>
        <button id="back"> << Back </button>`
        document.getElementById("back").addEventListener("click", Workout.renderIndex)
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



    static renderIndex = () => {

        const main = document.getElementById("main")
        main.innerHTML = ""
        const workoutContainer = document.createElement("div")
        const addWorkout = document.createElement("button")
        addWorkout.innerText = "Add a New Workout"
        addWorkout.addEventListener("click", modal.open )
        workoutContainer.id="workout-container"
        main.append(addWorkout, workoutContainer)
        this.all.forEach(workout => workout.renderWorkout())
        workoutContainer.addEventListener("click", this.handleClick)
    }
    
    static getWorkouts = () => {
        api.getWorkouts().then(workouts => {
            workouts.forEach(workout => new Workout(workout))
            this.renderIndex()
        })
    }    
    
    static handleClick = (e) => {
       if (e.target.classList.contains("title") || e.target.classList.contains("date")){
       const id = e.target.closest(".workout-card").dataset.id
       this.find(id).renderShow()
       }
    }
}

