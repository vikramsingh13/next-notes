# Fullstack Notes application with NEXT, React, PocketBase

## Startup the application:

**_Requires npm to be installed beforehand_**

### installing dependencies

In the root directory of the app use `npm i` to install the dependencies

### starting the NEXT/React app

In the root directory of the app use `npm run dev` to start the NEXT/React app.

By default the app will run on: `http://localhost:3000/`

## Startup the database

Pocketbase is included in the project for _Windows_ and _Linux_
Check below for instructions to include pocketbase for _Mac_

### On Windows

In the root directory of the app use `./pocketbase-windows serve`

This will start the database server at: `http://127.0.0.1:8090`

### On Linux

In the root directory of the app use `./pocketbase-linux serve`

This will start the database server at: `http://127.0.0.1:8090`

### On Mac

For Mac, please [download](https://pocketbase.io/docs/) and include the pocketbase file in the root folder of the app. Rename the file to `pocketbase-mac` to avoid conflicts with different versions. 

Download link: https://pocketbase.io/docs/

In the root directory of the app use `./pocketbase serve`

This will start the database server at: `http://127.0.0.1:8090`

## Accessing the API

### Default REST API endpoint 

http://127.0.0.1:8090/api/

### Default Admin UI access

http://127.0.0.1:8090/_/

email: `admin@example.com`
password: `thisispassword`

### API rules and docs 

API request and response details can be found in the admin panel

GET
/api/collections/notes/records

GET
/api/collections/notes/records/:id

POST
/api/collections/notes/records
title: String - optional
content: String - optional

PATCH
/api/collections/notes/records/:id
title: String - optional
content: String - optional

DELETE
/api/collections/notes/records/:id



