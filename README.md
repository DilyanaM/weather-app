# WeatherApp

## Setup & Development server

In order to run the app you need to setup an environment file, containing:
`API_URL` and `APP_ID` from [https://openweathermap.org/](https://openweathermap.org/).
Add those in `.env.example` and rename the file to `.env`.

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
