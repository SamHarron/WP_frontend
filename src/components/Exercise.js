class Exercise {

    constructor(data){
        this.workout = data 
    }

    render = () => {
        const { title, reps, sets, description, image } = this.workout
        document.querySelector(".container").innerHTML += `
        <div class="card"> <br>
            <h1>${title}</h1>
            <img src=${image}></img>
            <p> Reps: ${reps}, Sets: ${sets} </p>
            <p> ${description} </p>
        </div>`
    }

    static submitExercise = (e) => {
        e.preventDefault()
        const newExercise = {
            title: e.target.title.value,
            reps: e.target.reps.value,
            sets: e.target.sets.value,
            description: e.target.description.value,
            image: e.target.image.value
        }
        api.createExercise(newExercise).then(exercise => {
            new Exercise(exercise).render()
        })
        modal.close()
        e.target.reset()
    }

    static getExercises = () => {
        api.getExercises().then(exercises => {
            exercises.forEach(exercise => new Exercise(exercise))
            Workout.renderIndex()
        })
    } 
}