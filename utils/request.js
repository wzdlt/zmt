const baseURl = 'http://aaa.com'
export default function request({
  url,
  data,
  method = 'GET'
}) {
  return new Promise((reslove, reject) => {
    uni.request({
      url: baseURl + url,
      data: {

      },
      method,
      headers: {
        token: ''
      },
      success(res) {
        reslove(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}