# hmartos angular-seed — A seed for AngularJS apps
# Project forked from angular-seed

[![Build Status](https://travis-ci.org/hmartos/angular-seed.svg?branch=master)](https://travis-ci.org/hmartos/angular-seed)

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects. 

This project is a fork of [angular-seed](https://github.com/angular/angular-seed) with modules [ui-router](http://angular-ui.github.io/ui-router/site/#/api/ui.router), [angular-bootstrap](http://angular-ui.github.io/bootstrap/) and [angular-translate](https://angular-translate.github.io/).

The seed contains a sample AngularJS application with a view and a controller.

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone this repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You need node.js and its package manager (npm) installed.  You can get them from 
[http://nodejs.org/](http://nodejs.org/).

### Clone the repository

```
git clone https://github.com/hmartos/angular-seed.git
cd angular-seed
```

### Install Dependencies

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

*Note that the `bower_components` folder would normally be installed in the root folder but
you can changes this location through the `.bowerrc` file. Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

The simplest way to start this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`, it should redirect you to `http://localhost:8000/app/#/home`.