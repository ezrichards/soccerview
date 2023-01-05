# Soccerview
A work-in-progress interactive viewer for European football tactics.

## Usage
Simply `node index.js` while in the project directory to run.

The site will be available at `https://localhost:8888/` unless a port is otherwise specified in `.env`.

This project can also be ran via the Dockerfile, with the following commands (and a MongoDB instance running):
```
cd soccerview
docker build -t soccerview .
docker run -dp 8888:8888 soccerview
```

## Roadmap
* Adding preset "lineups"
* Save/clear functionality, reset positions
* Better responsiveness + position saving
* Admin functionality for editing teams

## Caveats
When using Visual Studio Code on this project, set `"html.validate.styles": false` in your `settings.json` as VScode does not validate EJS (`home.ejs` will have errors otherwise, but function perfectly fine).
