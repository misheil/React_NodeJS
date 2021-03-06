var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
       app:'./src/app.js'
    },

    
    output: {
 
        path: path.resolve(__dirname, 'public') + '/build',
        filename: 'bundle.js',

       
    },
    devtool:'#source-map',
    module: {
      loaders  : [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
            
        ]
    }
}
