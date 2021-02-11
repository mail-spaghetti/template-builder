


# Mail Speghetti Template Builder
This component is made to generate html templates. The idea is to have the template builder generate the html components. And save it in a mongo database.

# Solution Architecture

- React Js
- Redux 

# Getting Started

```bash
git clone https://github.com/mailspaghetti/template-builder && cd template-builder
```

#### Download and Install nodejs
```bash
https://nodejs.org/en/download/
```

#### Now Validate nodejs installation by checking the installed virsions
```bash
node -v
```

#### Check package.json file and ensure scripts are notated as below here we are using webpack and babelrc
```bash
"scripts": {
    "start": "webpack-dev-server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js --mode production",
    "dev-server": "webpack-dev-server"
  } 
```

#### Create .env.development file inside root of project and paste below keys values inside and save
```bash
API_BASE_URL=...
```
Delete the <b>node_modules</b> folder and any files such as package-lock.json if present
#### Installation
```bash
npm install
```

#### To run local open webpack.common.js and verify it should be
```bash
process.env.NODE_ENV = process.env.NODE_ENV || "development";
```
It will take <b>.env.development</b> file which we created on start.

#### Run in terminal
```bash  
npm start
```

#### Hit in the browser to run application
```bash
http://localhost:3000/
```

Before push on git for production or QA build open <b>webpack.common.js</b> and change it to
```bash
process.env.NODE_ENV = process.env.NODE_ENV || "production";
```
It will take <b>.env.qa</b>  or <b>.env</b> file depends on what type of build required, you should change accordingly in below lines of code inside webpack.common.js file. 

#### For production
```bash
dotenv.config({ path: '.env' })
```
#### For QA
```bash
dotenv.config({ path: '.env.qa' })        
```

## To run in production 
DockerFile is already inside project, we are using this DockerFile in Jenkins pipeline for production build. DockerFile will run in production
```bash
npm run build
```
