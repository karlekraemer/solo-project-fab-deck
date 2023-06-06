
FABulous Storage

A digital way to create and tweak decks for Flesh and Blood players. In future iterations, players will also be able to track statistics of their cards to make informed decisions about deck composition. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [x][Node.js](https://nodejs.org/en/)
- [x][PostrgeSQL](https://www.postgresql.org/)
- [x][Nodemon](https://nodemon.io/)

## Development Setup Instructions

- [x] Run `npm install`
- [x] Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- [x] Start postgres if not running already by using `brew services start postgresql`
- [x] Run `npm run server`
- [x] Run `npm run client`
- [x] Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. [x] Start the server - `npm run server`
2. [x] Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. [x] Click `Collections` and `Send` the following three calls in order:
   1. [x] `POST /api/user/register` registers a new user, see body to change username/password
   2. [x] `POST /api/user/login` will login a user, see body to change username/password
   3. [x] `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- [x] Start postgres if not running already by using `brew services start postgresql`
- [x] Run `npm start`
- [x] Navigate to `localhost:5001`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

<!-- Watch these!! -->
- [ ] [Initial Set](https://vimeo.com/453297271)
- [ ] [Server Walkthrough](https://vimeo.com/453297212)
- [ ] [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- [x] `src/` contains the React application
- [x] `public/` contains static assets for the client-side
- [x] `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- [x] `server/` contains the Express App


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

AUTHOR:

- Karl Kraemer