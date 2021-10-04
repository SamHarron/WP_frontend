# README

Workout Planner - This app is a useful tool to have when Planning your Workout for the day. A user is able to create a Workout with a title, date, and motivational message that has associated Exercises that the user can add to a Workout. 

Models:

    Workout:
    - Title
    - Date
    - Message

    Exercise:
    - Title
    - Reps
    - Sets
    - Desciption
    - URL

Installation

Fork and Clone this repository as well as the WP_backend repo, and then run: bundle install. Also run, rake db:migrate and rake db:seed on WP_backend to start with some data. 

To start using the server run rails s on WP_Backend. Then to see the html, go to WP_Frontend and run explorer.exe index.html to view in your faviorite browser. Lastly, To stop/kill the server Ctrl + C on the WP_backend.