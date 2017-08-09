# SQUAD-web

### Initial setup guide

Follow the following steps to feed initial data in local mongodb (With docker):

* Start docker and run following command:
`docker ps -a`
This will show list of containers in docker

* Start mongo container. From previous command, find mongo container id and run:
`docker start <mongo-container-id>`

* Run `docker ps -a` again. It'll show mongo is running at: 0.0.0.0:27017

* cd to server and do `npm install` or `yarn install` and `npm run seed`
It'll insert initial data to local mongodb. Every time user runs this command, it'll remove old data and fetch
new data from `data` directory and re-insert it.

* use `npm start` to start node server

Following steps for normal setup (Without docker):

 * Few prerequisite, you have installed node & mongodb on your host machine (Windows) / Virtual box.

 * Once mongodb is installed, run the mongo instance via mongo daemon `mongod`, this will start the mongodb on the specified port.

 * clone the project to your workspace.

 * cd to server and do `npm install` or `yarn install` and `npm run seed`
 It'll insert initial data to local mongodb. Every time user runs this command, it'll remove old data and fetch
 new data from `data` directory and re-insert it.

 * Once the packages are installed run `npm start` to start the server. (By default, when running on your local, connection will be created to your local mongodb itself)


### Check inserted data

To check inserted data, do following steps:

* Run `docker exec -it <mongo-container-id> bash`. This will take you into mongo container bash
* Run `mongo`. This will start mongo shell. Mongo shell is useful to check db data from command line.
* Run `show dbs`. This will show list of databases available. After initial setup, you should see 3 dbs, admin, local and squad
* Run `use squad`. Here 'squad' is database name and shell will be using squad database this step onwards
* Run `show collections`. This will show list of collections available.
* To check list of data available in a collection, run `db.<collection-name>.find()`. For example: db.projects.find()
