# team27

## Getting Started

### First Time Setup
- Download node.js and npm [here](https://nodejs.org/en/download/)
  - Mac node/npm download guide [here](https://treehouse.github.io/installation-guides/mac/node-mac.html)
  - We're using node@12.18.0
- Clone git repo `cd ~/Desktop; git clone https://github.com/csc309-summer-2020/team27.git`
- To install web app dependences run: `npm install` (make sure you're in the repo dir when you run this cmd)

#### Optional
- Installing yarn run: `curl -o- -L https://yarnpkg.com/install.sh | bash`
  - Other ways for installing yarn [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- For a guide on using npm click [here](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

### Start Web App
- To start web app in browser run: `npm start` (make sure you're in the repo dir when you run this cmd)

## Working On App

### Working On A Page
- Put reusable components of that page into a folder with that page's name in the `components` dir

### CSS Styling
- See `App.css` for general css classes that can be reused
- Use css variable to unify app styling by using `property: var(--some-var-name);`
- Ensure CSS class names follow the [BEM methodology](http://getbem.com/naming/).

### Using Git Issues
- Create issues (github verion of 'stories' for small tasks that need to be completed
  - Tag issuess with piority level
  - Tag issues with an 'epic' following this format `Epic: Name of Epic`
- Create 'milestone' for major sections involing the completion of multiple epics

## Pull Requests
- Make them small! Less than 150 lines! 

### Project Tree
```
team27
├── README.md
├── YARN_README.md
├── node_modules
├── package.json
├── yark.lock
├── .gitignore
├── public
│   ├── index.html
│   └── ...
├── package.json
├── tests
│   └── ...
└── src
    ├── actions
    │   └── login.js
    ├── components
    │   ├── LandingPage
    │   │   ├── Login
    │   │   ├── index.js
    │   │   └── styles.css
    │   └── ...
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── setupTests.js
    ├── setupTests.js
    └── serviceWorker.js
```
