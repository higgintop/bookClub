# bookClub
CRUD AngularJS app to review and recommend books

## Goals of App
* allow user register/log in (using Firebase)
* Search functionality using Amazon Product API to retrieve data about books
* Allow user to have a wish list of books and a read list of books
* If book is in the "read list" then let user open a form to review the book
* Form for user to submit their own recommendation
  * Write review
  * Give 5-star rating
  * Thumbs up/Thumbs down

## Sections of App
1. Home Page
  * Div/image for front page
2. Search
  * Form for searching books
  	* Title
  	* Author
  	* Search Button
  * Search Results
    * List of results - sort by?
    * Image
    * Title
    * Author
    * Description
    * Reviews from amazon members
    * link to buy from Amazon
    * Button to add to wish list
    * Button to add to read list
3. Books I've Read
  * Table or List of books I've read
  * Next to each item a button to add a review
  * Adding a review:
  	* Form field for review text
  	* Form field for star rating
  	* Form field for recommend (yes/no)
  	* Submit button (which adds review under each list item of books i've read)
4. Wish List
  * List of books I want to read
    * Thumbnail of cover
    * Title
    * Author
    * Link to Amazon to buy
