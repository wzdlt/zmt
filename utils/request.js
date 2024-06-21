// import { useTokenStore } from "../stores/token"
// import { storToRefs } from "pinia"
// const store = useTokenStore()
// const {token} = storeTorefs(store)

const baseURl = 'https://test.wql888.cn/api'

// export default function request({
//   url,
//   data,
//   method,
//   isToken = true
// }) {
//   return new Promise((reslove, reject) => {
//     uni.request({
//       url: baseURl + url,
//       data: {
//       },
//       method,
//       header: isToken ? {
//         // token: '1234'
//         token:token
//       } : {},
//       success(res) {
//         reslove(res.data)
//       },
//       fail(err) {
//         reject(err)
//       }
//     })
//   })
// }
export const request = (url,method,data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url, //接收请求的API
      method:method || 'GET', //接收请求的方式,如果不传默认为GET
      data:  {
        ...data
      }, //接收请求的data,不传默认为空 //接收请求的header
      success(res) {
        // ⭐在这里处理接收到响应后处理响应数据
        
        resolve(res.data) // 使用resolve将数据传递出去
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}