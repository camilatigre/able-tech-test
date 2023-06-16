# Ablefy

> Note: Create your own `.env` file with `DATABASE_URL` variable. You can use `.env.example` as a base for your own `.env` file.

> Note: This projects contains a seed file to seed your database. Remember to use `npm run seed` before. This script also runs before testing.

### Description

The database has models for Artists, Albums, and Songs, you could check their relationship on their schemas. You are required to make some queries and retrieve the data from the database.

### Requirements

**Must have**

- The endpoint `/api/songs/` that gets all the songs should be paginated. It should have `page` and `size` params.

- The endpoint `/api/songs/top` should return the 10 most listened songs.

- The endpoint `api/artists/top` should return the 3 most popular artists with an agregated field `totalPlaybacks` in each one.
