Making a backup of the `package.json` because there is a high level security advisory for react scripts. Going to see if updating packages will help.

Arbitrary File Overwrite

https://www.npmjs.com/advisories/803

Origional `package.json`
```
{
  "name": "labs11",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^3.9.2",
    "axios": "^0.18.0",
    "dotenv": "^7.0.0",
    "jwt-decode": "^2.2.0",
    "moment": "^2.24.0",
    "query-string": "^6.4.2",
    "react": "^16.8.4",
    "react-dom": "^16.8.6",
    "react-images-uploader": "^1.2.0-rc1",
    "react-materialize": "^2.6.0",
    "react-mdl": "^1.11.0",
    "react-redux": "^6.0.1",
    "react-router-dom": "^5.0.0",
    "react-scripts": "^2.1.8",
    "react-spinners": "^0.5.3",
    "react-stripe-checkout": "^2.6.3",
    "react-stripe-elements": "^2.0.3",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "stripe": "^6.28.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "proxy": "https://reverent-spence-fef835.netlify.com/"
}
```

All packages at latest
```
{
  "name": "labs11",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^3.9.3",
    "axios": "^0.18.0",
    "dotenv": "^7.0.0",
    "jwt-decode": "^2.2.0",
    "moment": "^2.24.0",
    "query-string": "^6.4.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-images-uploader": "^1.2.0-rc1",
    "react-materialize": "^3.0.4",
    "react-mdl": "^1.11.0",
    "react-redux": "^7.0.1",
    "react-router-dom": "^5.0.0",
    "react-scripts": "^2.1.8",
    "react-spinners": "^0.5.4",
    "react-stripe-checkout": "^2.6.3",
    "react-stripe-elements": "^2.0.3",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "stripe": "^6.28.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "proxy": "https://reverent-spence-fef835.netlify.com/"
}
```