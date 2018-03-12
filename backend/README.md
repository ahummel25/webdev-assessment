
# Backend Developer Test

If you are applying for a frontend specific role with no backend expectations, you can skip this folder's challenges.

## Challenge

Create an API written in Node.js that passes the tests in this folder. Writing additional tests is not required for this challenge.

### Requirements

1. The API should start a server on port `8080` using the `npm start` command.
1. The project should have no dependencies outside of the NPM ecosystem. That is, the only commands needed to run this project should be:
    ```
    npm install
    npm start
    ```
1. When installing any dependencies, make sure to save them to the local `package.json` so that anyone checking out your changes can install the correct dependencies.
1. Data must persist between server restarts. You are free to choose any solution to this as long as requirement 1 above is respected. Some common options:
    - Read/write JSON directly to a text file
    - Use a Node specific lightweight document store like [LokiJS](https://rawgit.com/techfort/LokiJS/master/jsdoc/tutorial-Persistence%20Adapters.html) or [lowdb](https://github.com/typicode/lowdb)
    - Use [sqlite3](https://github.com/mapbox/node-sqlite3) on its own, or with an ORM like [Sequelize](http://docs.sequelizejs.com/)
1. You may use any Node.js framework that you'd like (Express, Hapi, etc.) or none at all, and any other dependencies you find helpful.

### Setup

1. If you do not already have Node.js and npm installed, we recommend using [NVM](https://github.com/creationix/nvm) (Lin/OSX) or [NVM-Windows](https://github.com/coreybutler/nvm-windows/releases) (Windows)
1. Install Node.js 8.9.3 or higher, with npm 5 or higher
    - If you are using Windows,  see the [node-gyp instructions for Windows users](https://github.com/nodejs/node-gyp#on-windows) to properly set up your environment for building native npm dependencies.
1. Run `npm install` to set up the dependencies for the tests included in the project
1. Run `npm start` to start the server. Currently, this will run `index.js`, which contains a barebones Node.js server that will fail all of the included tests
1. In a separate terminal tab or window, run `npm test` to run the API tests
1. Write code to make the tests pass