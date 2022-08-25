# Hospital Coding Challenge

## Summary
A solution for managing hospitals.

## Running locally

First, start the data stores, Redis and MySQL. Run the following command from the root of the repository:

```
docker compose up -d
```

## Notes

The database comes with a small amount of seed data. You can update this data by changing scripts/schema.sql then re-creating the container. Re-creating includes stopping the existing containers, removing them, and removing any related volumes, then restarting.