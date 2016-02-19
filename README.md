# open-firebase

An open-source alternative of Firebase mainly developed to aid data collection for research purposes.

It includes a generic backend which can be used for web/mobile apps by using JS library and Android SDK. We are working to add websockets for auto update of views on data change/update similar to what Firebase does.

For data collection, we are developing and Android app and a dashboard which will be similar to ODK in term of usability.

# Running application
Open Firebase uses [SailsJS](http://sailsjs.org). To run the application:

* Sailsjs is built on top of nodejs. Therefore, install nodejs e.g. on Ubuntu ``apt-get install nodejs`` and npm e.g. on Ubuntu ``apt-get install npm``
* Clone this repository using ``git clone git@github.com:open-firebase/open-firebase.git``
* Install node_modules using ``npm install`` this will install all node as well as bower dependencies.
* You can configure database by adding required details in ``config/connections.js`` and change ``config/models.js`` to match that connection.
* Finally, start server ``sails lift`` and go to ``localhost:1337`` to open application.

# Contributing
We are open to contribution but we lack documentation to get you started. Fork this repo and send us a PR. We will be happy to have you on board. :)