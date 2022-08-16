import axios from 'axios'

export const request = function(requestInfo, firstFlag) {
  const { type = 'http' } = requestInfo

  if (type === 'http') {
    const { url, config, valueStructurePath } = requestInfo

    if (!url) {
      if (firstFlag) {
        console.log('url为空,请配置!')
      }
      return
    }

    return axios(url, config).then(
      (result) => {
        const { data: res } = result // eslint-disable-line no-unused-vars

        let returnValue = res
        if (valueStructurePath) {
          returnValue = eval(`res${valueStructurePath}`)
        }

        return new Promise((resolve, reject) => {
          resolve(returnValue)
        })
      },
      (res) => {
        console.log(res)
      }
    )
  } else {
    // websocket
  }
}
