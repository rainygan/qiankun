const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
    transpileDependencies:[
        'vuetify'
    ],
    pluginOptions:{
        "style-resources-loader":{
            preProcessor:"less",
            patterns:[
                path.resolve(__dirname,"./src/app.less")
            ]
        }
    },
    configureWebpack:{
        resolve:{
            extensions: ['.js', '.vue', '.json', '.css'], // 自动添加文件名后缀
			alias: {
				'@': resolve('src'),
			}
        }
    },
    chainWebpack(config){
        config.plugins.delete('prefetch')
    }
}