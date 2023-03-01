const b = 1
const B = 8
const KB = 1024 * B
const MB = 1024 * KB
const GB = 1024 * MB
const TB = 1024 * GB

const unitList = {
  b,
  B,
  KB,
  MB,
  GB,
  TB
}

const formatByte = (value, unit, formatUnit, withUnit = true) => {
  unit = unit || 'KB'
  formatUnit = formatUnit || 'KB'
  const res = (unitList[unit] * value) / unitList[formatUnit]
  if (isNaN(res)) {
    console.log(value, unit, formatUnit)
  }
  return `${res.toFixed(1)} ${withUnit ? formatUnit : ''}`
}

const formatDownloadSpeed = (value, unit, formatUnit) => {
  return `${formatByte(value, unit, formatUnit)} / s`
}

const formatSeconds = (second) => {
  if (!second) {
    return ''
  }

  if (second < 60) {
    return `${second}s`
  }

  if (second > 60 && second < 3600) {
    return `${(second / 60).toFixed(1)}m`
  }

  if (second > 3600) {
    return `${(second / 3600).toFixed(1)}h`
  }
}

const formatDay = (day) => {
  day = parseInt(day) || 0

  const res = {
    dayText: '',
    value: '',
    unit: ''
  }

  if (day === 0) {
    res.value = day
    res.unit = '天'
    res.dayText = '今日'
  }

  if (day % 365 === 0) {
    const yearCount = day / 365
    res.value = yearCount
    res.unit = '年'
    res.dayText = `${res.value}${res.unit}`
  }

  if (day % 30 === 0) {
    const monthCount = day / 30
    res.value = monthCount
    res.unit = '月'
    res.dayText = `${res.value}个${res.unit}`
  }

  return res
}

export {
  formatByte,
  formatDownloadSpeed,
  formatSeconds,
  formatDay
}
