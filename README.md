# React Shopping List

## Description

This is a full-stack app that allows users to create and track a list of groceries. Users are able to add, delete, mark groceries as purchased, reset a list to unpurchased for reusability, and clear a list entirely. Using React, the app will dynamically update in response to any changes.

## Installation & Usage

Fork and clone this repository. This app requires Node.js. If already installed, run "npm install" to install any dependencies.

PostgreSQL is also needed for this app. Once installed, connect to localhost on port 5432, and import the database.sql file to get the database set up.

You will need two terminals to run this app. In one, run "npm run server" and in the other run "npm run client" to start the app, and navigate to https://localhost:3000 in your browser to access the app.

The app will send grocery items to and from the PostgreSQL database. New items can be added through the form inputs and the Save button. Items can be deleted using the remove button in their respective components, and can be marked as purchased using the buy button. Clicking the reset button will set all items in the current list to unpurchased to make reusing the same list easy. Hitting the clear button will clear out all items in the current list.

## Technologies

- React
- Postgres
- Node.js
- Axios
- Express
- Bootstrap
- Languages used: HTML, CSS, JavaScript, JSX, SQL

## Contributors

[Chris Agbolade](https://github.com/yemluck)
[Johnathan Normand](https://github.com/johnnormand10)
[Chris Razidlo](https://github.com/cdraz)
