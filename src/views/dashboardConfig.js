import bg1 from '@/assets/dashboard-bg1.jpg'

const config = {
  backgroundImg: bg1,
  componentList: [
    {
      id: '11',
      componentName: 'CommemorationDate',
      size: 'big',
      extData: {
        title: '已失业',
        date: '2022-08-01'
      }
    },
    {
      id: '1',
      componentName: 'CountDown',
      size: 'big',
      extData: {
        title: '域名到期',
        date: '2024-03-08'
      }
    },
    {
      id: '3',
      componentName: 'CountDown',
      size: 'big',
      extData: {
        title: '下一次学费还款',
        dayList: ['01', '19', '22']
      }
    },
    {
      id: '9',
      componentName: 'CountDown',
      size: 'big',
      extData: {
        title: '域名到期',
        date: '2022-11-28'
      }
    },
    {
      id: '8',
      componentName: 'TikTokDownloadStatus',
      interval: 1000 * 5,
      size: 'big',
      extData: {
        api: ''
      }
    },
    {
      id: '7',
      componentName: 'TwitterFollowers',
      size: 'big',
      interval: 1000 * 5,
      extData: {
        api: ''
      }
    },
    {
      id: '81',
      componentName: 'GitHubRepoStars',
      size: 'big',
      interval: 1000 * 60 * 60,
      extData: {
        userName: '',
        repoName: ''
      }
    },
    {
      id: '811',
      componentName: 'LineChart',
      size: 'big',
      interval: 5000,
      extData: {
        title: 'surface温度',
        unitText: '°C',
        maxLength: 20,
        api: 'http://192.168.1.201:8888/api/cpu/temp',
        valueStructurePath: ".result[0]['Sensors'][2]['Temp']"
      }
    },
    {
      id: '8111',
      componentName: 'LineChart',
      size: 'big',
      interval: 2000,
      extData: {
        color: '#377880',
        title: '树莓派温度',
        unitText: '°C',
        maxLength: 20,
        api: ''
      }
    }
  ]
}

export {
  config
}
