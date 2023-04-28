This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and uses Typescript. MUI is the underlying component library. Currently the deployed page is hosted at [https://zizhang-ai.github.io/robot-vacuum/](https://zizhang-ai.github.io/robot-vacuum/).

The input will take a list of commands, and after the submit button is hit, the final position will display below the button.

## Run the project locally

A node (>= 16) environment is needed to make it work. First, install the dependencies
```bash
npm install
# or
yarn install
```
And then you can run the following command to start the development server

```bash
npm run dev
# or
yarn dev
```


## Unit Test
Unit tests were added to test the robot class and the command parser function. Simply run 
```bash
npm run test
# or
yarn test
```

## End to End test
The end to end test uses Cypress and will test the deployed github page, since we do not have a staging environment. Use the following command to run the e2e test suite
```bash
npm run cypress
# or
yarn run cypress
```
Videos can be found in the `cypress/videos` folder. If you prefer to see the test running in the browser yourself, you can run
```bash
npm run cypress:open
# or
yarn run cypress:open
```

## Next steps
There are still room for improvement, e.g. we can add the unit tests in the github actions as part of the deployment pipeline.