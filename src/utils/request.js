import axios from 'axios'
import { getPropertyValue } from '@/utils/objectHelper.js'

export const request = function (requestInfo) {
  const { type = 'http' } = requestInfo

  if (type === 'http') {
    const { url, config, valueStructurePath } = requestInfo

    if (!url) {
      return
    }

    return new Promise((resolve, reject) => {
      axios(url, config)
        .then(
          (result) => {
            const { data: res } = result

            let returnValue = res
            if (valueStructurePath) {
              returnValue = getPropertyValue(res, valueStructurePath)
            }

            resolve(returnValue)
          }
        )
        .catch((res) => {
          reject(res)
        })
    })
  } else {
    // websocket
  }
}
