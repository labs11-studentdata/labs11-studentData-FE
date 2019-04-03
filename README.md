This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ENVIRONMENT VARIABLES

to run locally

```
REACT_APP_BE_URL=http://localhost:9000
REACT_APP_FE_ROOT=http://localhost:3000
```

## FEATURE ROUTES

### Main routes
| VIEW           | ROUTE                                                           |
| -------------- | --------------------------------------------------------------- |
| LOGIN          | https://reverent-spence-fef835.netlify.com/login                |
| ONBOARDING     | https://reverent-spence-fef835.netlify.com/onboarding           |
| SPONSOR        | https://reverent-spence-fef835.netlify.com/sponsor              |
| BOARD          | https://reverent-spence-fef835.netlify.com/boardmemberdashboard |
| ADD STUDENT    | https://reverent-spence-fef835.netlify.com/add                  |
| VIEW STUDENT 1 | https://reverent-spence-fef835.netlify.com/student/1            |
| SOCIAL         | https://reverent-spence-fef835.netlify.com/socialsocialworkerdashboard               |
| ADMIN          | https://reverent-spence-fef835.netlify.com/adminadmindashboard                |

| FEATURE                                | ENDPOINT                                  | ROUTE         |
| -------------------------------------- | ----------------------------------------- | ------------- |
| Create a school                        | POST /api/schools/                        | /onboarding   |
| Create a special need for a student    | TBD                                       | TBD           |
| Sponsor a student                      | POST /api/donations                       | /students/:id |
| View a student                         | GET /api/students/:id                     | /students/:id |
| Update a student                       | PUT /api/students/:id                     | /students/:id |
| Delete a student                       | DELETE /api/students/:id                  | /students/:id |
| List of social worker visits           | GET /api/social_worker_visits             | /social       |
| List of social worker visits by school | GET /api/social_worker_visits/schools/:id | /social       |
| Create a Social Worker Visit           | POST /api/social_worker_visits            | /social       |
| Delete a social worker visit           | DELETE /api/social_worker_visits/:id      | /social       |
| Edit social worker visits              | PUT /api/social_worker_visits/:id         | /social       |
| Stripe integration                     | TBD                                       | TBD           |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
