const baseURl = 'http://aaa.com'
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
        token: '1234'
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