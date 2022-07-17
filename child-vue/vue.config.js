const packageName = require('./package.json').name;
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  publicPath: isProduction ? '/child-vue' : '/',
  transpileDependencies:[
    'vuetify'
  ],
  devServer: {
    headers : {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port:8081,
  },
  configureWebpack: {
    output:{
      library: `${packageName}-[name]`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
};