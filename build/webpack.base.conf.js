const path = require('path');
const APP_PATH = path.resolve(__dirname, '../app');
const DIST_PATH = path.resolve(__dirname, '../dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.js',
        framework:['react','react-dom'],
    },    
    output: {
        filename: 'js/bundle.js',
        path: DIST_PATH,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
        		exclude: /node_modules/,
                include: APP_PATH
            },
		　　　　/*{
		　　　　　　test: /\.html$/,
		　　　　　　loader: 'html-withimg-loader' // html-loader 功能一样
		　　　　},*/
            {
		        test: /\.html$/,
		        use: [
		        	{
		            	loader: "html-loader" //html-loader 虽然解决了图片解析问题，但又使原本支持的 模板变量解析 功能丧失
		        	}
		        ]
		    },
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
			        fallback : "style-loader",
			        use: [
	                    {
	                        loader: "css-loader"//获取引用资源，如@import,url()
	                    },
	                    {
	                        loader: "postcss-loader"
	                    }
	                ]
			    })
            },
            {
                test:/\.less$/,
                use : ExtractTextPlugin.extract({
			        fallback : "style-loader",
               		use: [
	                    {
	                        loader: "css-loader"
	                    },
	                    {
	                        loader: "postcss-loader"//自动加前缀
	                    },
	                    {
	                        loader: "less-loader"
	                    }
	                ]
	            })
            },
            {
              	test:/\.scss$/,
              	use : ExtractTextPlugin.extract({
			        fallback : "style-loader",
		            use:[
		                  {
		                      loader: "css-loader"
		                  },
		                  {
		                      loader: "postcss-loader"
		                  },
		                  {
		                      loader: "sass-loader"
		                  }
		              ]
		        })
            }
        ]
    },
    plugins: [
    	new ExtractTextPlugin('css/[name].[hash].css')
    ]
};