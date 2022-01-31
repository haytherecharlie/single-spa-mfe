![RBC](https://worknearyou.ca/wp-content/uploads/2021/10/RBC-LOGO.jpg)

# RBC | Front End Micro Architecture Service


## Deliverables
* In this repository you will find all the code for the application - a MFE framework for multiple Angular applications.
* A container application called `aot-container`
* Two Angular applications, one on Angular 8 `widget-offers` and one on Angular 12 `widget-kyc`
* Finally, You will find this README file which will guide you through setup and initialization of the app. 

## Technical stack
This project leverages the following Technologies:
* [Single-spa.js](https://single-spa.js.org/): To create the container.
* [Angular](https://angular.io/): To create the widgets
* [System.js](https://github.com/systemjs/systemjs): To handle module / import maps.

## Module importing

The container application src directory houses three files, an html file that is that houses the `single-spa-router`,
and `ejs` file that loads shared libraries and also handles import maps and finally a `js config` file called `rbc-root-config`
that loads the routes and starts the single-spa application.

**NOTE: In the `index.ejs` file you will find an import map config for production and one for local development, both of these 
configs can be replaced by JSON files, and in production - the import map should live externally so that it can be updated
independently from the container app itself. (ie. when a developer wants to add a new application, they can do so without needing
to redeploy the container.)

## Getting Started
In order to setup and run the application, please follow these instructions:
```
# ensure you are using node 12 or greater
node -v

# clone the repository from github:
git@github.com:haytherecharlie/rbc-mfe.git

# navigate to the project folder:
cd rbc-mfe

# install dependencies:
npm run setup

# start development server:
npm start
```


## UML diagrams

Component tree diagram:
![Component Tree Diagram](https://raw.githubusercontent.com/haytherecharlie/rbc-mfe/master/diagram.png)
