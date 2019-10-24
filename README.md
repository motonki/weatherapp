# Weatherapp

Hours spent: 14

There was a beautiful idea of building an app that would show the upcoming weather. The developers wrote a nice backend and a frontend following the latest principles and - to be honest - bells and whistles. However, the developers did not remember to add any information about the infrastructure or even setup instructions in the source code.

Luckily we now have [docker compose](https://docs.docker.com/compose/) saving us from installing the tools on our computer, and making sure the app looks (and is) the same in development and in production. All we need is someone to add the few missing files!

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.

## Returning your solution

### Via github

* Make a copy of this repository in your own github account (do not fork unless you really want to be public).
* Create a personal repository in github.
* Make changes, commit them, and push them in your own repository.
* Send us the url where to find the code.

### Via tar-package

* Clone this repository.
* Make changes and **commit them**.
* Create a **.tgz** -package including the **.git**-directory, but excluding the **node_modules**-directories.
* Send us the archive.

## Exercises

Here are some things in different categories that you can do to make the app better. Before starting you need to get yourself an API key to make queries in the [openweathermap](http://openweathermap.org/). You can run the app locally using `npm i && npm start`.

### Docker

*Docker containers are central to any modern development initiative. By knowing how to set up your application into containers and make them interact with each other, you have learned a highly useful skill.*

* Add **Dockerfile**'s in the *frontend* and the *backend* directories to run them virtually on any environment having [docker](https://www.docker.com/) installed. It should work by saying e.g. `docker build -t weatherapp_backend . && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend`. If it doesn't, remember to check your api key first.

Started by searching *run node app in docker* and found [this](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/) page. Followed isntructions and edited it to suit exercises requirements for backend. Edited little bit more to run also the frontend.

Used Docker CLI [documentation](https://docs.docker.com/engine/reference/commandline/) to figure out how to close an docker process for which I closed terminal tab.

* Add a **docker-compose.yml** -file connecting the frontend and the backend, enabling running the app in a connected set of containers.

This is done. Used [Docker compose documentation](https://docs.docker.com/compose/compose-file/) as a guideline. The solution is right now suboptimal, because it requires running `docker-compose up --build` to put any changes in source code to effect. I tried starting backend container with nodemon instead of node command using [this](https://medium.com/better-programming/docker-in-development-with-nodemon-d500366e74df) guide. According to a guide I read that would have required a binding mount of data. My attempt was halted for missing modules and I had to revert changes.

* The developers are still keen to run the app and its pipeline on their own computers. Share the development files for the container by using volumes, and make sure the containers are started with a command enabling hot reload.

Wasn't quite sure what this means. I suppose that docker-compose would have copied the source code to image but apparently it broke things quite bad.

### Node and React development

*Node and React applications are highly popular technologies. Understanding them will give you an advantage in front- and back-end development projects.*

* The application now only reports the current weather. It should probably report the forecast e.g. a few hours from now. (tip: [openweathermap api](https://openweathermap.org/forecast5))

This is kind of implemented. The backend now retrieves /forecast data instead of /weather and returns the entire response object to the frontend. However the rendering of that data is still quite unsusable because the whole forecast doesn't fit the screen and the page isn't scrollable (I want to believe this is quite simple feature to implement but my search resulted only in custom components or libraries). Also because forecasts is just a long list of icons it's impossible to comprehend when the forecast weather should occur. I tried two solutions, adding timestamps for each weather and grouping forecasts into rows of eight icons (one row for each next 24 hrs).

I have done pretty similar project earlier as a hobby (just a frontend though). I tried to use its [source code](https://github.com/motonki/rushb) how to render the data.

i think the bootstrap felxbox could have been solution to arrangin the data but unfortunately I had too little time after all other experiments to try that out propoerly.

* There are [eslint](http://eslint.org/) errors. Sloppy coding it seems. Please help.

Didn't have time for this one. There seemed to be commands for running eslint in the package.json. That would have been the starting point.

* The app currently reports the weather only for location defined in the *backend*. Shouldn't it check the browser location and use that as the reference for making a forecast? (tip: [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation))

Didn't have time for this one.

### Testing

*Test automation is key in developing good quality applications. Finding bugs in early stages of development is valuable in any software development project. With Robot Framework you can create integration tests that also serve as feature descriptions, making them exceptionally useful.*

* Create automated tests for the application. (tip: [mocha](https://mochajs.org/))

Used [this](https://dzone.com/articles/testing-nodejs-application-using-mocha-and-docker) as a guide to setup mocha tests. The tests can now be run, but there is no actual logic yet. I had some conceptual issues with how to write tests. Further searching for examples would have likely elaborated the topic.

* Create [Robot Framework](http://robotframework.org/) integration tests. Hint: Start by creating a third container that gives expected weather data and direct the backend queries there by redefining the **MAP_ENDPOINT**.

### Cloud

*The biggest trend of recent times is developing, deploying and hosting your applications in cloud. Knowing cloud -related technologies is essential for modern IT specialists.*

* Set up the weather service in a free cloud hosting service, e.g. [AWS](https://aws.amazon.com/free/) or [Google Cloud](https://cloud.google.com/free/).

I didn't have time to test this one out. Searched for basic instructions for how to deploy React and Node apps to AWS and based on [this](https://medium.com/@adhasmana/how-to-deploy-react-and-node-app-on-aws-a-better-approach-5b22e2ed2da2) and [this](https://medium.com/@nishankjaintdk/setting-up-a-node-js-app-on-a-linux-ami-on-an-aws-ec2-instance-with-nginx-59cbc1bcc68c) I think I would know how to get started.

### Ansible

*Automating deployment processes saves a lot of valuable time and reduces chances of costly errors. Infrastructure as Code removes manual steps and allows people to concentrate on core activities.*

* Write [ansible](http://docs.ansible.com/ansible/intro.html) playbooks for installing [docker](https://www.docker.com/) and the app itself.

This is a totally new tool for me and would have liked to learn it a little bit. I spent too much time with the earlier tasks and starting eith this one would require some learning basics because I am not familiar with the concepts of Ansible.

### Documentation

*Good documentation benefits everyone.*

* Remember to update the README

* Use descriptive names and add comments in the code when necessary
