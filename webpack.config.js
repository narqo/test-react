var nodeModulesDir = __dirname + '/node_modules';

module.exports = {
    context : __dirname + '/app',
    entry : {
        javascript : './main.js'
    },
    target : 'web',
    output : {
        path : __dirname + '/build',
        filename : 'bundle.js'
    },
    resolve : {
        alias : {
            'react' : nodeModulesDir + '/react/dist/react.js'
        }
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                include : [
                    __dirname + '/app'
                ],
                loaders : ['babel-loader']
            },
            {
                test : /\.html$/,
                loader : 'file?name=[name].[ext]'
            }
        ]
    }
};
