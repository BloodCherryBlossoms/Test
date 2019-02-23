// see http://vuejs-templates.github.io/webpack for documentation.
//https://webpack.js.org/configuration/dev-server/#devserver-color-cli-only
const path = require('path')

console.log('')
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')
console.log('等待')
console.log('本地启动或构建的文件信息 | 结束--------------------------------------------------------------')
console.log('')
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/', 
    // assetsDir: './static',
    outputDir: 'dist',
    assetsDir: 'assets',//静态资源目录
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: config => {},
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // pages:{ type:Object,Default:undfind } 
    devServer: {
        port: 3000, //侦听端口号
        host: 'localhost',//指定要使用的主机
        https: false, // https:{type:Boolean}(需要https证书)
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        overlay: {//配置错误提示
            warnings: true,
            errors: true
        },
        //告诉dev-server压缩webpack包信息之类的消息
        noInfo: true,
        //默认情况下Gzip关闭许多流行的静态主机，例如
        // Surge或Netlify已经为您准备了所有静态资产。
        //在设置为“true”之前，请确保：
        // npm install --save-dev compression-webpack-plugin
        compress: true,//Gzip
        //添加绝对路径
        // contentBase: [
        //     path.join(__dirname, 'public'), 
        //     path.join(__dirname, 'assets')
        // ],
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }, 
         // 配置多个代理
        //添加响应头
        headers: {
            'X-Custom-Foo': 'bar'
        },
        publicPath: '/',
        hot: true,//启用webpack的热模块替换功能：
        hotOnly: true,//在没有页面刷新的情况下启用热模块替换
        before: app => {},
        progress: true,//输出运行进度到控制台
        staticOptions: {//静态文件的高级选项
          redirect: false
        },
        stats: 'errors-only',//显示捆绑包中的错误
        watchContentBase: true,//文件更改将触发整页重新加载
        disableHostCheck:true//配置反向代理
    }
}
