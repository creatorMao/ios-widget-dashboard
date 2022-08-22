const getPropertyValue = function(obj, propertyPath) {
  if (propertyPath.substr(0, 1) === '.') {
    propertyPath = propertyPath.substr(1)
  }

  return propertyPath.split('.').reduce((total, current) => {
    // console.log(total)
    // console.log(current)
    const patten = /(\S*)\[(\S*)\]/
    const pattenRes = patten.exec(current)
    if (pattenRes) {
      return total[pattenRes[1]][pattenRes[2]]
    } else {
      return total[current]
    }
  }, obj)
}

export {
  getPropertyValue
}
