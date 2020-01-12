# Employee Managment Rest API

## Table of contents

- [Employee Managment Rest API](#employee-managment-rest-api)
  - [Table of contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies used](#technologies-used)
  - [Local Project Setup(For Dev purposes)](#local-project-setupfor-dev-purposes)
  - [Features](#features)
    - [Implemented](#implemented)
    - [To Be Implemented](#to-be-implemented)
  - [Available Endpoints](#available-endpoints)
  - [Documentation](#documentation)
  - [Status](#status)
  - [CopyRights](#copyrights)

## General Info

```gherkin
Employee Managment API is a collection of enpoint that facilitate,
the managment of employees at managerial point of view
```

## Technologies used

- Nodejs
- ExpressJs
- ES6
- HandleBars
- Postman

## Local Project Setup(For Dev purposes)

- clone the project using `git clone https://github.com/kwizeraelvis/EmployeeManagmentRestAPI.git`
- move into the source directory using `cd EmployeeManagmentRestAPI`
- install all neccesary dependencies/modules using `yarn install` or with npm using `npm install`
- build the source using `yarn run build` or with npm using `npm run build`
- start the server using `yarn run start` or with npm using `npm run start`

## Features

### Implemented

- [x] Managers can create an employee
- [x] Managers can update an employees profile
- [x] Manager can activate the employee
- [x] Managers can suspend an employee
- [x] Managers can list all available employees
- [x] Managers can view employees by their id
- [x] Manager can delete an employee
- [x] Manager can search any employee
- [x] Manager can upload excel workbooks containg employee Information and they will be registered

### To Be Implemented

- [] Manager signup
- [] Manager Signin
- [] Sending Email confirmation to Employee upon registration
- [] Manager Password Reset
- [] User Activity Logs

## Available Endpoints

|Endpoint                      |Method                     | Functionality                                    |
|------------------------------|---------------------------|--------------------------------------------------|
|/employees                    |POST                       |Create New Employee                               |
|/employees/search             |POST                       |Search an Employee by props                       |
|/batchcreate                  |POST                       |Parses excel files and registers employees listed |
|/employees/:id                |PUT                        |Updates employees profile                         |
|/employees/:id/activate       |PUT                        |Updates employee status to active                 |
|/employees/:id/suspend        |PUT                        |Updates employee status to inactive               |
|/employees/:id                |DELETE                     |Deletes an employee by their id                   |
|/employees/list               |GET                        |Lists all registered employees                    |
|/employees/:id                |GET                        |Shows employee profile by id                      |
|/file                         |GET                        |Is used to render the file upload template        |

## Documentation

Documentation can be found here: [![Dev Docs](https://documenter.getpostman.com/view/5540374/SWLiYkhH)]

## Status

```gherkin
In development
```

## CopyRights

![GitHub](https://img.shields.io/github/license/kwizeraelvis/EmployeeManagmentRestAPI)   ![CopyRight](https://img.shields.io/badge/CopyRight-Kwizera%20Elvis-green)
