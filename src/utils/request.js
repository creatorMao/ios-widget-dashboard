import axios from 'axios'
import { getPropertyValue } from '@/utils/objectHelper.js'

export const request = function (requestInfo, firstFlag) {
  const { type = 'http' } = requestInfo

  if (type === 'http') {
    const { url, config, valueStructurePath } = requestInfo

    if (!url) {
      if (firstFlag) {
        console.log('url为空,请配置!')
      }
      return
    }

    return axios(url, config)
      .then(
        (result) => {
          const { data: res } = result

          let returnValue = res
          if (valueStructurePath) {
            returnValue = getPropertyValue(res, valueStructurePath)
          }

          return returnValue
        }
      )
      .catch((res) => {
        console.log(res)
        // return res
      })
  } else {
    // websocket
  }
}
