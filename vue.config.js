// vue.config.js
const path = require('path')
module.exports = {
    configureWebpack: {
        
      // Configuration applied to all builds
      
        resolve: {
            // 文件别名，import 时候简化输入
            alias: {
                Src: path.resolve(__dirname, './src'),
              }
        }
  
    },
    pluginOptions: {
      electronBuilder: {
      }
    },
    productionSourceMap: false,    //打包好的代码不可以访问源代码
  }