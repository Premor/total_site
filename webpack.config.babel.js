import path from 'path';

const config = {
    entry: './client/src/index.js',
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve('./', 'themes/default/public/js/'),
        filename: 'app.bundle.js'
    },
    
  module: {
        loaders: [
        {
          test: /\.(json)$/,
          exclude: /node_modules/,
          loader: 'json-loader',
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            "presets": [["es2015", {"modules":false}], "react"]
          }
      
        },
        {
          test: /\.(?:png|jpg|gif|svg)$/,
          loader: 'url-loader',
        },
        {
          test: /\.css/,
          loader: 'style-loader!css-loader?localIdentName=[local]-[hash:base64:5]',
        },
        {
          test: /\.less/,
          loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!less',
        },
      ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

export default config;