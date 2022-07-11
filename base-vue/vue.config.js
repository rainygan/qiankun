const path = require('path');

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
    }
}