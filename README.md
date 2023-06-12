# Recipes

A place where users can store their favorite Recipes.

METHOD  |   PATH                    |   PURPOSE
------------------------------------------------------------
GET     | /                         | Home page
GET     | /recipes                  | Places index page
POST    | /recipes                  | Create new recipe
GET     | /recipes/new              | Form page for creating a new recipe
GET     | /recipes/:id              | Details about a particular recipe
PUT     | /recipes/:id              | Update a particular recipe
GET     | /recipes/:id/edit         | Form page for editing an existing recipe
DELETE  | /recipes/:id              | Delete a particular recipe
POST    | /recipes/:id/comments     | Create a comment about a particular recipe
DELETE  | /recipes/:id/comments/:commentId  | Delete a comment about a particular recipe
GET     | *                         | 404 page (matches any route not defined above)