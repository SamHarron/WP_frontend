class ApiService {

    constructor(api) {
        this.api = api
    }

    getWorkouts = () => fetch(this.api + "/workouts").then(res => res.json())
}