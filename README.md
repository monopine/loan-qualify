## Summary
_Loan Qualify_ simulates applying for an auto-loan<br />
It's built on top of the base scaffolding for Create React App.<br />
It uses [Formik](https://github.com/jaredpalmer/formik), and [Yup](https://github.com/jquense/yup) for forms and validation. [Reach Router](https://reach.tech/router) is used to navigate between views.

## Installation and Usage

Note: This application requires yarn to install and manage dependencies. Please see [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/) for installation instructions

1. Clone the repo
2. `yarn install`
3. `yarn start`
4. Navigate to http://localhost:3000

Due to the mock API interace, _Loan Qualify_ will only function correctly if run locally, at localhost:3000. To reconfigure the app `mock-api.js` can be updated to fetch a resource elsewhere.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
