const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
	resolve: {
		root: __dirname,
		alias: {
      		Main: 'src/components/Main.js'
		},
		extensions: ['', '.js', '.jsx']
	},
	resolveLoader: {
 		root: path.join(__dirname, 'node_modules')
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader",
      		query: {
      			presets: ["react", "es2015", "stage-0"]
     		}
    	}]
	},
	devtool: "eval-source-map"
};