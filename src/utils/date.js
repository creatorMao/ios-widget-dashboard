import dayjs from 'dayjs'
const weekDayList = ['日', '一', '二', '三', '四', '五', '六']

const getWeekDay = function(dateText) {
  let date = dayjs()
  if (dateText) {
    date = dayjs(dateText)
  }
  return {
    value: date,
    text: `星期${weekDayList[date.day()]}`
  }
}

export {
  getWeekDay
}
