module.exports = {
    entry: "./public/scripts/task_wrapper.jsx",
    output: {
        path: __dirname + '/public/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: ['style', 'css']
            },
            {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    },

    resolve: {
     extensions: [ '', '.js', '.json', '.jsx', '.es6', '.babel', '.node'],
  },



  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }

};