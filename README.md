# Team Divider
A web application to help activity organizer divide participants into different teams.

## ScreenShots
#### Application page
![app page](https://cloud.githubusercontent.com/assets/11642176/25405696/ee38118e-29b8-11e7-8b3f-b4f84c71155e.png)

## Dependecies Required to Deploy
* Node.js v6.10.x
* MongoDB v3.4

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


## Development
#### Developer Tools
**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. 
It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing 
any packages.
However, adding the DevTools components to your project is simple. First, grab the packages from npm:
```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```
Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) 
(`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) 
section for more information.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files 
automatically, and Mocha and Chai will be available within your test without the need to import them. Coverage reports 
will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are 
compiled, you can do so by modifying `coverage_reporters` in `~/config/project.config.js`.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` 
(make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of 
server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend 
the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the 
root `~/dist/index.html` file and let react-router take care of the rest. If you are unsure of how to do this, 
you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) 
helpful. The Express server that comes with the starter kit is able to be extended to serve as an API or whatever else 
you need, but that's entirely up to you.

## Build System

### Configuration

Default project configuration can be found in `~/config/project.config.js`. Here you'll be able to redefine 
your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. 
For the most part, you should be able to make changes in here **without ever having to touch the actual webpack 
build configuration**.

If you need environment-specific overrides (useful for dynamically setting API endpoints, for example), 
you can edit `~/config/environments.config.js` and define overrides on a per-NODE_ENV basis. There are 
examples for both `development` and `production`, so use those as guidelines. Here are some common 
configuration options:

|Key|Description|
|---|-----------|
|`dir_src`|application source code base path|
|`dir_dist`|path to build compiled application to|
|`server_host`|hostname for the Express server|
|`server_port`|port for the Express server|
|`compiler_devtool`|what type of source-maps to generate (set to `false`/`null` to disable)|
|`compiler_vendor`|packages to separate into to the vendor bundle|

Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), 
which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found 
as the `globals` key in `~/config/project.config.js`. When adding new globals, make sure you also add 
them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|

### Styles

Both `.scss` and `.css` file extensions are supported out of the box. After being imported, styles will be 
processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be 
extracted to a `.css` file during production builds.

### Server

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server 
is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Express 
app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the 
starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base 
boilerplate.

### Production Optimization

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) 
so transforms aren't inlined. In production, webpack will extract styles to a `.css` file, minify your JavaScript, 
and perform additional optimizations such as module deduplication.

 
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
