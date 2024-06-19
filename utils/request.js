import { useTokenStore } from "../stores/token"
import { storToRefs } from "pinia"
const store = useTokenStore()
const {token} = storeTorefs(store)
const baseURl = 'https://test.wql888.cn/api'
export default function request({
  url,
  data,
  method = 'GET',
  isToken = true
}) {
  return new Promise((reslove, reject) => {
    uni.request({
      url: baseURl + url,
      data: {
      },
      method,
      header: isToken ? {
        // token: '1234'
        token:token.value()
      } : {}
      success(res) {
        reslove(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}