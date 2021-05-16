
# *Webpack-React-Babel bolierplate* #

#### Webpack - 5,
#### React - 17,
#### Babel - 7

### **Info for packages installed in this project:** ###
#### Webpack:
```
    -> webpack
        - used to configure our new app
    -> webpack-cli
        - used so that we can use Webpack in the command line
    -> webpack-dev-server
        - used so that when we make a change to a file inside our new app, we won’t need to refresh the page. 
        - It refreshes the browser page automatically every time we change a file in our app
        - as its name says, it’s a server that is working non-stop
```

#### Babel: tell Webpack how to compile our React code.
```
    -> @babel/core
        — this is used to compile ES6 and above into ES5
    -> @babel/node
        — this is used so that we can import our plugins and packages inside the webpack.config.js rather than require them,
        — (it’s just something that I like, and maybe you’ll like it too)
    -> @babel/preset-env
        — this will determinate which transformations or plugins to use and polyfills 
        — (i.e it provides modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
    -> @babel/preset-react
        — this is going to compile the React code into ES5 code
    -> babel-loader
        — this is a Webpack helper that transforms your JavaScript dependencies with Babel 
        — (i.e. will transform the import statements into require ones)
```

#### CSS & SCSS:
```
    -> style-loader
        — this will add to the DOM the styles (will inject a <style> tag inside the HTML file)
    -> css-loader
        — will let us import CSS files into our project
    -> sass-loader
        — will let us import SCSS files into our project
    -> node-sass
        — will compile the SCSS files into normal CSS files
```


#### Below is the explanation of webpack config:
```
    -> entry and output
         — these are used to tell our server what has to be compiled and from where (entry: path.join(__dirname,’src’,’index.js’),). 
         — It also tells where to put the outputted compiled version (output — the folder and the filename)
    -> mode
         — this is the mode of our output. We are setting it to ‘development’. 
         — If in the scripts we specify the NODE_ENV variable, it will take that one instead. e.g. "webpack": "NODE_ENV=production webpack",
    -> resolve
        — this is used so that we can import anything from src folder in relative paths instead of absolute ones. 
        — It is the same for the node_modules. We can import anything from node_modules directly without absolute paths
    -> devServer
        — this tells the webpack-dev-server what files are needed to be served. 
        — Everything from our src folder needs to be served (outputted) in the browser
    -> plugins
         — here we set what plugins we need in our app. 
         — As of this moment we only need the html-webpack-plugin which tells the server that the index.bundle.js should be injected
         — (or added if you will) to our index.html file
```
