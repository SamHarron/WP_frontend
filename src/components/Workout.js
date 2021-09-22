class Workout {

    static all = []
    constructor(data){
        this.workout = data
        this.exercises = this.workout.exercises.map(exercise => new Exercise(exercise))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { title, date, message } = this.workout
        document.getElementById("main").innerHTML = `
        <div class="workout-show" >
        <p class="title">${title}
        <p class="date">${date}
        <div class="container"></div>
        </div>
        <button id="back"> << Back </button>`
        document.getElementById("back").addEventListener("click", Workout.renderIndex)
        this.exercises.forEach(exercise => exercise.render())
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

    static submitEvent = (e) => {
        e.preventDefault()
        const newWorkout = {
            title: e.target.title.value,
            date: e.target.date.value,
            message: e.target.message.value
        }
        api.createWorkout(newWorkout).then(workout => {
            new Workout(workout).renderWorkout()
        })
        modal.close()
        e.target.reset()
    }

    static workoutForm = () => {
        modal.main.innerHTML = `
        <h3> Add A New Workout </h3>
        <form>
        <label for="title">Title:</label><br>
        <input type="text" name="title"><br>
        <label for="date">Date:</label><br>
        <input type="text" name="date"><br>      
        <label for="message">Message:</label><br>
        <input type="text" name="message"><br>
        <input type="submit" value="Submit"><br>
        </form>`
        modal.main.querySelector("form").addEventListener("submit", this.submitEvent)
        modal.open()
    }

    static find = (id) => this.all.find(workout => workout.workout.id == id)

    static renderIndex = () => {

        const main = document.getElementById("main")
        main.innerHTML = ""
        const workoutContainer = document.createElement("div")
        const addWorkout = document.createElement("button")
        addWorkout.innerText = "Add a New Workout"
        addWorkout.addEventListener("click", this.workoutForm )
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

