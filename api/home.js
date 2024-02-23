const http = uni.$u.http
export default {
  // 1. uview2里的方式
  //  // 测试get请求
  //  queryArticle: (params) => {
  //    return http.get('/2',{
  // 		params:params||{},
  // 	})
  //  },
  // // 测试post请求
  // updateArticle: (data,config={}) => {
  // 	return http.post('',data,config)
  // },

  // 2. 类似飞译人员管理的请求方式
  // 测试get请求  ** 要求method方法必须大写 **
  // 请求方式详见 https://www.quanzhan.co/luch-request/guide/3.x/#example
  queryArticle: (params) => {
    return http.request({
      url: '/2',
      method: 'GET',
      params,
    })
  },
  // 测试post请求
  updateArticle: (data) => {
    return http.request({
      url: '',
      method: 'POST',
      data,
    })
  },
}
