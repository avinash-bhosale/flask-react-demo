const path = require('path');

module.exports = [{
    mode: 'development',

    entry: "./frontend/components/UserForm/index.js",

    output: {
        path: path.resolve(__dirname, 'app/static/js'),
        filename: 'index.bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            { test: /\.js[x]?$/, use: 'babel-loader' }
        ]
    }
},
{
    mode: 'development',

    entry: "./frontend/components/Home/index.js",

    output: {
        path: path.resolve(__dirname, 'app/static/js'),
        filename: 'home.bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            { test: /\.js[x]?$/, use: 'babel-loader' }
        ]
    }
}
]