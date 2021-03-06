# Interview Scheduler

Scheduler is a single-page application built with React. It allows the user to book appointments with mentors 5 times a week from 12:00 - 5:00 pm. These appointments can be edited and/or cancelled in real time by the user. 

## API Server
The app communicates with an API server to fetch the data living in its database (PSQL) as well as to save the new input received from the user.

**_Fork/clone the [**shcheduler-api**](https://github.com/mafe-rnanda/scheduler-api) and follow the README instructions to configure and run the API server._**

### TDD (Test Driven Development)
In order to test the functionality of the project, the following tools were used: Storybook (to build components in isolation), Jest (unit testing) and Cypress (end-to-end testing)

### Project Functionality and Features
- Interviews can be booked between Monday and Friday only
- The user can switch between weekdays and the selected day will display highlighted with the available spots remaining and the current slots booked.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- The user can cancel or edit an existing interview.
- The expected day updates the number of spots available when an interview is booked or canceled.
- The user is presented with a confirmation when they attempt to cancel an interview.
- The user is shown an error if an interview cannot be saved or deleted.
- The user is shown a status indicator while asynchronous operations are in progress.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots
!['day-selection-and-new-appointment'](https://github.com/mafe-rnanda/scheduler/blob/master/docs/navigate_days_add_new_appointment.gif?raw=true)
_Navigate through the left side bar to change day of the week and display the different appointments._
_Add a new appointment_

!['edit-delete-appointment'](https://github.com/mafe-rnanda/scheduler/blob/master/docs/edit_delete_appointment.gif?raw=true)
_Edit and delete an appointment_

!['error-message'](https://github.com/mafe-rnanda/scheduler/blob/master/docs/error_message.gif?raw=true)
_If an error occurs, the user is alerted_