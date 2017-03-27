# videa-demo

> Videa Demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## To create a ZIP file of the demo

`npm run build`
`rm -rf dist`
`mv public dist`
`cp db.json dist/.`
`zip -r dist.zip dist -x "*.DS_Store"
`mv dist.zip dist-YYYY-MM-DD-HHmm--localhost.zip`

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
