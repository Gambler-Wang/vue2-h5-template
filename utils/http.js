import { httpBaseDomain } from '@/config/index.js'
import { httpBasePrefix } from '@/config/index.js'
import { getToken } from '@/utils/app-store.js'

module.exports = (vm) => {
  uni.$u.http.setConfig((config) => {
    //  config 为默认全局配置
    config.baseURL = httpBaseDomain + httpBasePrefix /* 根域名 */
    config.timeout = 800
    return config
  })

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    (config) => {
      config.data = config.data || {}
      const token = getToken()
      const userQuery = ['GET', 'DELETE'].includes(config.method.toUpperCase())
      let httpParams = userQuery ? config.params : config.data
      if (token) {
        httpParams = {
          token,
          ...httpParams,
        }
      }
      return userQuery
        ? {
            ...config,
            params: httpParams,
          }
        : {
            ...config,
            data: httpParams,
          }
      return config
    },
    (config) => {
      return Promise.reject(config)
    }
  )

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    (res) => {
      console.log(res)
      const { statusCode, data } = res
      if (statusCode === 200 || statusCode === 201) {
        return data || {}
      } else {
        // uni.showToast({
        //   title: '请求失败',
        //   duration: 1200,
        // })
        uni.$u.toast(data.message)
        return Promise.reject(data)
      }
    },
    (error) => {
      // 对响应错误做点什么 （statusCode !== 200）
      // if (error.statusCode == 401) {
      // uni.clearStorageSync();
      // 	uni.switchTab({
      // 		url: "/pages/home/home.vue"
      // 	})
      // }
      return Promise.resolve(error)
    }
  )
}

// // 直接基于uview里的luch-request进行封装,就和uview1封装的请求一致
// import Request from '@/uni_modules/uview-ui/libs/luch-request/index.js'
// import { httpBaseDomain } from '@/config/index.js'
// import { httpBasePrefix } from '../config/index.js'
// import { getToken } from '../utils/app-store.js'
// const http = new Request({
//   baseURL: httpBaseDomain + httpBasePrefix,
//   timeout: 800,
//   header: {},
// })
// //请求拦截器
// http.interceptors.request.use(
//   (config) => {
//     console.log(config)
//     const token = getToken()
//     const userQuery = ['get', 'delete'].includes(config.method.toLowerCase())
//     let httpParams = userQuery ? config.params : config.data
//     if (token) {
//       httpParams = {
//         token,
//         ...httpParams,
//       }
//     }
//     return userQuery
//       ? {
//           ...config,
//           params: httpParams,
//         }
//       : {
//           ...config,
//           data: httpParams,
//         }
//   },
//   (error) => {
//     return Promise.resolve(error)
//   }
// )

// // 响应拦截器
// http.interceptors.response.use(
//   (res) => {
//     console.log(res)
//     const { statusCode, data } = res
//     if (statusCode === 200 || statusCode === 201) {
//       return data
//     } else {
//       uni.showToast({
//         title: '请求失败',
//         duration: 1200,
//       })
//       return Promise.reject(data)
//     }
//   },
//   (error) => {
//     // if (error.statusCode == 401) {
//     // uni.clearStorageSync();
//     // 	uni.switchTab({
//     // 		url: "/pages/home/home.vue"
//     // 	})
//     // }
//     return Promise.resolve(error)
//   }
// )
// export default http
