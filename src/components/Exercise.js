class Exercise {

    constructor(data){
        this.workout = data 
    }

    render = () => {
        const { title, reps, sets, description, image } = this.workout
        document.querySelector(".container").innerHTML += `
        <div class="card">
            <h1>${title}</h1>
            <img src=${image} alt=${title}/>
            <p> Reps: ${reps}, Sets: ${sets} </p>
            <p> ${description} </p>
        </div>`
    }
}