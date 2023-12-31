## Brief
Bookmyshow is a ticketing platform where you can book tickets for a movie show.

we need to build API’s for the following feature. As a user, I can select any theatre in the city. On selecting the theatre, I should be able to see the dates of next 7 days.

I can click on any date and the page should load to give me all the movies in that theatre on that given date. Movies should contain details of all the showtimes.The image represents the feature described on the previous page.

You have to code the APIs along with appropriate table structures for powering this UI.

Expected output of this assignment will be code submitted on github PR for all three questions. Parts that need subjective answers should be added to a doc and pushed to the top level git directory.

It’s been 2 years since you built this API. The API overtime has become slow. Which columns would you index to improve the performance of the API ? Why ?

You have noticed that even after indexing the columns the API speed isn’t under 100 ms. Update the code of existing API to cache the appropriate data in the redis. What all data would you cache and why ?

Create an API to book seats for you and you friend for a given theatre and a show.

********************************************************

Continuing with our Bookmyshow case study.

Implement code for quick retrieval of static movie data - Name, Cast, Crew, Movie Plot, Runtime, Language, Genre, etc.  

Build an endpoint for storing and retrieval of comments and ratings for a given movie. Which database would you choose and why? 

Build an endpoint where one can search for movies and theatres. Refer image on the right.  

Implement language (Hindi, English, Kannada, Telugu etc.) and genre (Romantic, Action, Scifi) and format (2D, 3D, IMAX) filters. 



If for any scenario you are using MongoDB, ensure you are setting up things with the free tier of Cloud MongoDB Atlas.

********************
Bookmyshow is a ticketing platform where you can book tickets for a movie show. The image attached represents that for a given theatre we can see the next 7 dates. As one chooses the date, we get list of all shows running in that theatre along with the show timings.

P1 - As part of this assignment, we need to list down all the entities, their attributes and the table structures for the scenario mentioned in the previous slide. You also need to write the SQL queries required to create these tables along with few sample entries. Ensure the tables follow 1NF, 2NF, 3NF and BCNF rules.

P2 - Write a query to list down all the shows on a given date at a given theatre along with their respective show timings.

Submission guidelines
Expected output of this assignment a doc with list of all tables, their attributes, few example rows, SQL for P1 and P2 solutions as a PR on Github. Ensure the SQL queries are directly executable on MySQL database.

Deliverables

PDF file