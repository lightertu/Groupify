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

# to serve the web page
yarn serve

# it will be availible at "localhost:3000/activity/cis422"
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
		- [Grommet](https://grommet.github.io/docs/filter-control)
		- [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI-React)
		
* Back-End:
	- [Nodejs](https://nodejs.org/en/)
	
* Database:
	- [Mongodb](https://nodejs.org/en/)
	

```bash
cd <Your-Directory>
git clone https://github.com/lightertu/TeamDivider.git
cd TeamDivider
```
Then install dependencies and check to see it works. It is recommended that you use Yarn for 
deterministic installs, but npm install will work just as well.


Make sure that mongodb is running in the background
```bash
yarn install
yarn start
```

### Possible Issues
### Windows
**If you get the error**

```bash
Fatal Error: spawn cmd ENOENT
```
Add C:\Windows\System32\ to the PATH Environment variable

## Progress Log

### Week 1

Goal: Finish first UI sprint. Focus on creating flexible React components. 

1) Done with core functionality of drag and drop team creation page - Rui Tu
2) Done with core functionality of welcome page - Joseph Livni
3) Generate project scaffolding - Rui Tu
4) Design the logic of the application(front end/ back end) - Rui Tu, Joseph Livni

### Week 2

Goal: Finish up UI and begin work on algorithm

1) Cleaned up UI bugs and added more functionality to drag and drop team creation page - Rui Tu
2) Dynamic dashboard created to navigate to groups and surveys - Joseph Livni
3) Created login page - Joseph Livni
4) Created survey page - Joseph Livni
5) started planning out algorithm strategy - Kai Huang

### Week 3

Goal: Finish the core backend. Finish the algorithm. Add features to the front end.

1) Built database - Joseph Livni
2) Built server - Joseph Livni
3) Built API to communicate with front end components - Joseph Livni
4) Created ability to add custom survey questions - Joseph Livni
5) Finished algorithn and tested accuracy - Kai Huang
6) More progress made on drag and drop team creation page - Rui Tu

### Week 4

Goal: Fix bugs. Integrate algorithm into backend. Connect front end with API end points. Finish Documentation.

1) Integrated algorithm into back end - Joseph Livni, Kai Huang
2) Created auto emailer - Joseph Livni
3) Created ability to upload list of users - Joseph Livni
4) Made final connections between the backend and the front end - Joseph Livni, Rui Tu
5) Added ability for database to store front end user card position state - Joseph Livni


### API End Points

## Grab all Groups

```
http://localhost:3000/api/groups
```

## Fetch Survey/Group by ID

```
http://localhost:3000/api/groups/{form id}
```

## Update User on Dnd interface

```
http://localhost:3000/api/studentUpdate/{form id}
```
pass:

idx: 'current student idx' note: index starts at 1
gruopNumber: 'new group number:

#Example:
```
axios.post('/api/studentUpdate/YPYj0yQMFBpilutfIk6NXWVcc', {
            idx: 2,
            groupNumber: 6
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
```



# Future Features
* filtering and search based on questions in the survey on the group assignment page
* Smart Layout: generate different layouts given different group capacities
* Allow modifying activity infomation such as group capacity, total number of participants, on the grouping page
