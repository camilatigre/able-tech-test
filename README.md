# Songs and Movies exercises

This repository contains two different projects that are not related to each other. You must need to complete the tasks from the two projects.

- `backend-ablefy` is the backend exercise
- `frontend-typeahead` is the frontend exercise

<hr />

## Ablefy

> Note: Create your own `.env` file in `/backend-ablefy` with `DATABASE_URL` variable. You can use `.env.example` as a base for your own `.env` file.

> Note: This projects contains a seed file to seed your database. Remember to use `npm run seed` before. This script also runs before testing.

> Note: If you have trouble editing the source code in your local environment, you can use the docker setup mentioned below

### Description

The database has models for Artists, Albums, and Songs, you could check their relationship on their schemas. You are required to make some queries and retrieve the data from the database.

### Requirements

**Must have**

- The endpoint `/api/songs/` that gets all the songs should be paginated. It should have `page` and `size` params.

- The endpoint `/api/songs/top` should return the 10 most listened songs.

- The endpoint `api/artists/top` should return the 3 most popular artists with an agregated field `totalPlaybacks` in each one.

<hr />


## Typeahead

### Description

Typeahead or autocomplete is a common feature that people come across on websites. For example, when you are searching on Google, you will notice a word populates before you finish typing.

### Requirements

**Must have**

- Whenever the user focuses the text field and the value changes, it should show the list of suggestions.

- Whenever the text input looses focus (either because of clicking away or becasue of pressing Tab for example) the suggestions should disappear, so they don't keep covering the rest of the app.

- When the user writes something in the text field, it should continuously fetch and show suggestions for anything written, updating it live, without the need to click a button or press the ENTER key or anything else

- We don't want to blow up our API by sending so many unnecessary requests, so whenever the text field is changed, instead of immediately sending a request, it should wait for 250 ms of no new changes before actually sending a request to the API.

- Once the suggestions appear, hovering the mouse pointer on any specific suggestion should highlight it.

**Nice to have**

- Add a cache layer for the data

- Have another list which will have selected movies from your search list.

<hr />

## Notes

Remember to remove `.skip` from the tests found on `/backend-ablefy/tests/` and `/frontend-typeahead/src/components/App.test.js`

<hr />

## **Docker Setup**
This guide will help you to run the components of the exercise as Docker containers using Docker Compose on your local environment.

**Prerequisites**
  * Docker: [Linux](https://docs.docker.com/engine/install/ubuntu/), [MacOS](https://docs.docker.com/docker-for-mac/install/), [Windows](https://docs.docker.com/docker-for-windows/install/)
  * [Docker Compose](https://docs.docker.com/compose/install/) (Only for Linux)
**Run your environment**

### **1. Ablefly**
The following command will run the application along a PostgreSQL database:
```
docker-compose up -d
```
You can check the status of the Docker containers by running:
```
docker ps
```
By default, the application will run on port 5000 ( https://localhost:5000)

### **2. Typeahead**
The following command will run the application:
```
docker-compose up -d
```
You can check the status of the Docker containers by running:
```
docker ps
```
By default, the application will run on port 3000 ( https://localhost:3000)
