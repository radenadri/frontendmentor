const path = require('path');

module.exports = {
	mode: 'development',
  devServer: {
		contentBase: __dirname,
		hot: true,
  },
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: __dirname,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname, 'postcss.config.js'),
							},
						}
					}
				]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
					context: path.resolve(__dirname, 'images/'),
					publicPath: 'dist',
					useRelativePaths: true
        },
			},
		]
	}
}