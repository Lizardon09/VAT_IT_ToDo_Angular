# Application

Simple dynamix ToDo List page where a ToDo item can be added, checked, unchecked or deleted. Changes to the list must reflect dynamically on the site

#Design Choices/Dependencies

- Used service to manage the todo list item flow and recording updates
- Used observerable for todolist to listen for changes
- Used index values of todo items as Id's to retrieve, update, and delete items at 0(1) (In general circumstance Ids would already be appended to the todo items retrieved and backend would manage changes)
- Added custom library to manage component lifetime for auto unsubscribes on component destructions - basic memory leak prevention

# ToDoListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
