const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers : {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port:8081,
  },
  configureWebpack:{
    output:{
			library: `${packageName}-[name]`,
			libraryTarget: 'umd',
			// jsonpFunction: `webpackJsonp_${packageName}`

		}
  }
})
