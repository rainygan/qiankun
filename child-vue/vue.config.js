const packageName = require('./package.json').name;
module.exports = {
  devServer: {
    headers : {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: (config)=>{
    Object.assign(config.output,{
			library: `${packageName}-[name]`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_${packageName}`

		})
  }
};