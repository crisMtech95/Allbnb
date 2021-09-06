
# Allbnb

## What is Allbnb?

 As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location. 
 
 ## Project Structure Overview
 
 The backend of this app was built using Python and Flask integrated SQLAchemy to interconnect with a postgreql database. React and Redux allow for smart management of data and components rerenders and continous navigation without the need of a page refreash. The RESTful API was design in harmony with the redux store to display on the page any change that the user might cause to the database. 
 
### Technologies Used

* Javascript
* React
* Redux
* Python
* SQLAlchemy 
* Flask
* Postgresql
 
# Main Features

## Login and User Signup

 One of the main features of the site is the ability of the user to create an account and be able to sign in . The users passwords are protected by being stored using bcrypt password hashing. In addition having an allows authorization and authentication for different features of the site. 

## Posts

 Another main function of the site is having the ability to Post an item for other users to see and interact with. All features of the site have full CRUD functionality, meaning users have the ability to see, create, edit and delete this posts.
 
 ## Images
 
  Images also have Crud functionality, user's have the ability to see, add and delete the images for every post they themselves have created. 
  
 ## Reservations
 
  Every user can see the posts that others have posted and create a reservations for specific dates, after said reservations are created  theres logic preventing other user's from renting the item for those same dates. It also shows the total price, before the user confirms their reservation and on their own profile, user's can see all of the reservations and cancel them if need be. 
  
 ## Reviews
 
 Only after a user has created a new Reservation on a post, they have the ability to leave a review, they can see other user's reviews and edit a delete reviews that they have left on a post. Moreover the Post will show the average of the stars left with each review. 
 
 ## Search 
 
 The final primary feature is the search feature, which allows users to easily find items on a specific location. It also allows users to filter their search by item types and price range.
 
 
