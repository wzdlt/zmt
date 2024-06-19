import { useTokenStore } from "../stores/token"
import { storToRefs } from "pinia"
const store = useTokenStore()
const {token} = storeTorefs(store)
<<<<<<< HEAD
const baseURl = 'http://test.wql888.cn/api/'
=======
const baseURl = 'https://test.wql888.cn/api'
>>>>>>> a3986eb8886cb424861ba0a3b94d01bb54871d86
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