const path = require('path')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: "development",
	entry: {
		index: ["./src/index.ts", "./src/index.css"],
		recipes: ["./src/recipes.ts", "./src/recipes.css"],
		contact: ["./src/contact.ts", "./src/contact.css"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true
	},
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3333,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript"
						],
						plugins: [
							[
								"@babel/plugin-proposal-decorators",
								{ legacy: true }
							]
						]
					}
				}
			},
			{
				test: /\.ts$/i,
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			  }
		],
	},
	plugins: [
		new ForkTsCheckerPlugin({
            async: false
        }),
		new HtmlPlugin({
			filename: "index.html",
			template: "./src/index.html",
			inject: true,
			chunks: ["index"],
		}),
		new HtmlPlugin({
			filename: "recipes.html",
			template: "./src/recipes.html",
			inject: true,
			chunks: ["recipes"],
		}),
		new HtmlPlugin({
			filename: "contact.html",
			template: "./src/contact.html",
			inject: true,
			chunks: ["contact"],
		}),
		new CopyPlugin({
			patterns: [{ from: "public" }]
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	]
}