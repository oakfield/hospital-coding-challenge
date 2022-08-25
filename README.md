# Hospital Coding Challenge

## Summary
A solution for managing hospitals.

## Running locally

First, back end, which consists of a .NET server and MySQL. Run the following command from the root of the repository:

```
docker compose up -d
```

Then install the front end packages and start the web server.

```
cd webapp
npm install
npm start
```

## Notes

The database comes with a small amount of seed data. You can update this data by changing scripts/schema.sql then re-creating the container. Re-creating includes stopping the existing containers, removing them, and removing any related volumes, then restarting.