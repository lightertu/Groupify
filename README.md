# Team Divider

This tool is build for dividing people into team given criteria.
## ScreenShots
![activity page](https://cloud.githubusercontent.com/assets/11642176/25405277/ae7cd63e-29b7-11e7-9458-eb76afa5f40f.png)


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
	- [Mongodb]()
	
  


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

 
### To Do

### Week 2

Goal: Finish UI. Focus on creating flexible React components. 

1) Change login page to popup on welcome page
2) Create a preview survey popup underneath welcome
3) Create survey page


### API End Points

## Grab all Groups

```
http://localhost:3000/api/groups
```

## Fetch Survey/Group by ID

```
http://localhost:3000/api/groups/ID
```

# Future Features
* filtering and search based on questions in the survey on the group assignment page
* Smart Layout: generate different layouts given different group capacities
* Allow modifying activity infomation such as group capacity, total number of participants, on the grouping page
