const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  externals: {
    jquery: 'jQuery'
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry"
                }
              ]
            ]
          }
        }
      }
    ]
  },
  output: {
    "filename": "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, 'dist/scripts')
  },
  plugins: [
    new ManifestPlugin({
      fileName: path.resolve(__dirname, './src/data/manifest.json'),
      map: function(fileDesc){
        fileDesc.name = fileDesc.name.replace(/\./gi, '_')
        return fileDesc
      }
    })
  ]
}
