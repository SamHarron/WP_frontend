const api = new ApiService("http://localhost:3000")

api.getWorkouts().then(console.log)
