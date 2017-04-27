# Team Divider
A web application to help activity organizer divide participants into different teams.

## ScreenShots
#### Application page
![app page](https://cloud.githubusercontent.com/assets/11642176/25405696/ee38118e-29b8-11e7-8b3f-b4f84c71155e.png)

## Dependecies Required to Deploy
* Node.js v6.10.x 
* MongoDB v3.4.x
* [Yarn v0.23.x](https://yarnpkg.com/en/)

## How to Deploy
After you have installed Node.js and MongoDB make sure the `node`, `mongod`, `yarn`, and `npm` are in your `$PATH` environment variable. Then do the following steps.

```bash
# this will clone the 'submission' branch
git clone https://github.com/lightertu/TeamDivider/tree/submission <path>

# installing all the project dependencies
cd <path>/TeamDivider
npm install

# make sure mongodb is running
sudo mongod

# to serve the web page
yarn start
```
It will be availible at 
```
localhost:3000/activity/cis422
```


## Technologies Deployed
* Scaffolding Tool:
	- [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
* Front-End:
	- Control
		- [Reactjs](https://facebook.github.io/react/)
		- [Redux](http://redux.js.org/)
		- [Immutablejs](https://facebook.github.io/immutable-js/)
		- [React Drag and Drop](http://react-dnd.github.io/react-dnd/)
		- [React Sticky Node](https://github.com/yahoo/react-stickynode)
	- View
		- [Material-UI](http://www.material-ui.com/)
		- [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI-React)
		
* Back-End:
	- [Nodejs](https://nodejs.org/en/)
	
* Database:
	- [Mongodb](https://nodejs.org/en/)
	

### Possible Issues
#### Windows
**If you get the error**

```bash
Fatal Error: spawn cmd ENOENT
```
Add `C:\Windows\System32\` to the `PATH` Environment variable


# Future Features
* filtering and search based on questions in the survey on the group assignment page
* Smart Layout: generate different layouts given different group capacities
* Allow modifying activity infomation such as group capacity, total number of participants, on the grouping page
