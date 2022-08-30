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

const formatDownloadSpeed = (value, unit, formatUnit) => {
  unit = unit || 'KB'
  formatUnit = formatUnit || 'KB'
  const res = (unitList[unit] * value) / unitList[formatUnit]
  if (isNaN(res)) {
    console.log(value, unit, formatUnit)
  }
  return `${res.toFixed(1)} ${formatUnit}/s`
}

export {
  formatDownloadSpeed
}
