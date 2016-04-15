### Serve application
Copy the contents of the `dist` directory to the server's _web root_

### Serve application locally
```bash
# install dependencies
npm install -g http-server json-server

# A simple zero-configuration command-line http server
http-server

# serve JSON files through REST routes
json-server --watch db.json
```

### Build application from source
```bash
# clone git repo
git clone https://tfs.videa.tv/tfs/Videa/Videa%20Git/_git/videa-demo

# install dependencies
npm install

# build for production with minification
npm run build
```

### Resources
- <https://docs.npmjs.com/getting-started/installing-node>
- <https://www.npmjs.com/package/http-server>
- <https://www.npmjs.com/package/json-server>
