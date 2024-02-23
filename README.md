# test-uniapp-web
本仓库作为uniapp+uview2.0的前端模板,框架为[uniapp](https://uniapp.dcloud.io/), ui组件为[uview2.0](https://www.uviewui.com/components/intro.html),内置请求基于[luch-request](https://www.quanzhan.co/luch-request/)二次封装(仿fy人员版web端)

## 项目目录
|[目录](https://uniapp.dcloud.io/tutorial/project.html)|说明|
|:-:|:------:|
|components|公共组件,基础组件|
|config|配置文件|
|method|公共方法|
|pages|页面|
|api|各个模块的API请求|
|utils|工具|
|uni_modules|插件存放[uni_module](https://uniapp.dcloud.io/tutorial/project.html)|
|static|静态资源|
|store|全局变量|
|styles|主题样式配置,公共样式也可放入|
|App.vue|挂载页|
|main.js|入口文件|
|pages.json|页面路由配置..等|
|template.h5.html|h5模板页|
|manifest.json|项目配置文件|
|project.config.json|微信ide项目配置|
|project.private.config.json|微信ide项目配置|

## 编译环境说明
只能在hbuilderX下编译,可以用其他IDE写代码,再用这个hbuilderX编译看效果,最好直接用HbuilderX吧
## 项目运行说明
### h5运行
开发环境运行需要配置'manifest.json'里的代理,类似cli里的vue.config.js的代理配置.项目需要使用hbuilderX进行编译, 运行方式点击上方工具栏"运行=>运行到浏览器=>chrome"
    
    "h5" : {
        "template" : "template.h5.html",
        "router" : {
            "mode" : "hash"
        },
        "devServer" : {
            "https" : false,
            "port" : 8080,
            "disableHostCheck" : true,
            "proxy" : {
                "^/posts" : {
                    "target" : "http://jsonplaceholder.typicode.com", //目标接口域名
                    "changeOrigin" : true, //是跨域
                    "secure" : false, //设置支持https协议的代理
                    "pathRewrite" : {
                        "/posts" : "/posts"
                    }
                }
            }
        }
    }
### 小程序运行
需要配置'manifest.json'里的小程序APPID, 同时本机需要安装微信IDE,并开启微信IDE的服务端口, 允许被其它软件调用,开启"设置=>安全=>服务端口". 项目需要使用hbuilderX进行编译,运行方式点击上方工具栏"运行=>运行到小程序=>选择微信小程序"; 还有其他问题自行百度"uniapp编译小程序"
```
开发环境运行时可能被微信IDE拦截,微信IDE需要设置项目配置让IDE不对"不合法https请求链接进行校验"
```    
### Android运行
需要开启安卓手机的"开发者模式", 运行进行调试;连接手机和电脑,等hbuilderX监测到后,点击上方工具栏"运行=>运行到手机或模拟器=>选择你的手机", 可以不用真机使用模拟器,具体自行百度"uniapp使用安卓模拟器调试"
     
## 请求说明
  详情见: [uview2.0请求封装说明](https://www.uviewui.com/js/http.html),[luch-request文档](https://www.quanzhan.co/luch-request/)
## 全局变量存储说明
  详情见: [vuex全局变量说明](https://vuex.vuejs.org/zh/),[uniapp里的本地缓存](https://uniapp.dcloud.io/api/storage/storage.html#setstorage)
## 开发说明
  >uview内置很多工具, 非必要不用额外引入. [工具](https://www.uviewui.com/js/debounce.html)

  >pages.json和mainfest.json配置说明[文档](https://uniapp.dcloud.io/collocation/pages.html)

  >跨段条件编译说明[文档](https://uniapp.dcloud.io/tutorial/platform.html)
