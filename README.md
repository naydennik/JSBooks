<img src="https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg" title="JS Books" alt="JS Books">

# JS Books

A simple app for creating and viewing books dedicated to Javascript

## Quick description

To enter the app everyone has to register and login first.
There are two types of users - regular and admins.
Regular users can create books and view the list with already created books.
The admins have the rights of regular users and in addition can edit and delete books.

## Used technology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

In the project are used Toastr and Pagination services and Bootstrap library.

## Architecture

1. Auth Module - containing the components responsible for the user authentication:

   - Login Component - responsible for the login page
   - Register Component - responsible for the register page
   - Models - Login and Register models
   - Auth Routing Module - responsible for the Lazy loading of Login and Register pages
   - Auth Service - responsible for the login and register services

2. Books Module - containing all elements connected to the main content of the app:

   - Books All Component - responsible for books list page
   - Books Create Component - responsible for create page
   - Books Details Component - responsible for details page
   - Books Edit Component - responsible for edit page
   - Models - Detailed book and Create book models
   - Books Routing Module - responsible for the Lazy loading of all Books pages
   - Books Service - responsible for the services built in the Books pages

3. Shared Folder - containing elements used in all pages of the app:

   - Footer Component - responsible for the footer section of all pages
   - Header Component - responsible for the header section of all pages
   - Interceptors (Token interceptor) - responsible for the transformation of the outgoing request and in particular for handling the headers

4. About Component - responsible for the About page

5. Home Component - responsible for the landing page

6. Guards - remove access to certain parts of the navigation

## Setup

To explore the code run `ng install` first.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
