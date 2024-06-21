import {request }from "../utils/request";
export function getNumber(data) {
  return request({
    url: '',
    data: {
      ...data
    },
    method: 'POST'
  })
}
// 登录
export const Login = () => {
  return request.post('/login/login', {
    form: {
      
    }
  })
}
// export function Login(data) {
//   return request({
//     url: "login/login",
//     data,
//     method: 'POST',
//     isToken: false
//   })
// }
// 注册
export const zhuce = () => {
  return request.post('/login/register', {
    form: {
      
    }
  })
}
// export function zhuce(data) {
//   return request({
//     url: "login/register",
//     data,
//     method: 'POST',
//     isToken: false
//   })
// }
// 发送短信验证码
export const yanz = (mobile) => {
  return request.post('/login/send-sms', {
    mobile:mobile
  })
}
// export function yanz(data) {
//   return request({
//     url: "login/send-sms",
//     data,
//     method: 'POST',
//     isToken: false
//   })
// }