const packageName = require('./package.json').name;
module.exports = {
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
  configureWebpack: (config)=>{
    Object.assign(config.output,{
			library: `${packageName}-[name]`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_${packageName}`

		})
  }
};