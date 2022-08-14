import bg1 from '@/assets/dashboard-bg1.jpg'

const config = {
  backgroundImg: bg1,
  componentList: [
    {
      id: '11',
      componentName: 'CommemorationDate',
      size: 'default',
      extData: {
        title: '已失业',
        date: '2022-08-01'
      }
    },
    {
      id: '1',
      componentName: 'CountDown',
      size: 'default',
      extData: {
        title: '域名到期',
        date: '2024-03-08'
      }
    },
    {
      id: '3',
      componentName: 'CountDown',
      size: 'default',
      extData: {
        title: '下一次学费还款',
        dayList: ['01', '19', '22']
      }
    },
    {
      id: '9',
      componentName: 'CountDown',
      size: 'default',
      extData: {
        title: '域名到期',
        date: '2022-11-28'
      }
    },
    {
      id: '8',
      componentName: 'TikTokDownloadStatus',
      interval: 1000 * 5,
      size: 'default',
      extData: {
        api: ''
      }
    },
    {
      id: '7',
      componentName: 'TwitterFollowers',
      size: 'default',
      interval: 1000 * 5,
      extData: {
        api: ''
      }
    },
    {
      id: '81',
      componentName: 'GitHubRepoStars',
      size: 'default',
      interval: 1000 * 60 * 60,
      extData: {
        personalAccessToken: '',
        owner: 'creatorMao',
        repo: 'ios-widget-dashboard'
      }
    },
    {
      id: '811',
      componentName: 'LineChart',
      size: 'default',
      interval: 1000 * 60,
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
      size: 'default',
      interval: 1000 * 60,
      extData: {
        color: '#377880',
        title: '树莓派温度',
        unitText: '°C',
        maxLength: 20,
        api: ''
      }
    },
    {
      id: '999',
      componentName: 'GitHubRepoCloneTraffic',
      size: 'default',
      interval: 1000 * 60,
      extData: {
        personalAccessToken: '',
        owner: 'creatorMao',
        repo: 'ios-widget-dashboard'
      }
    },
    {
      id: '9991',
      componentName: 'CommonCount',
      size: 'default',
      interval: 1000 * 60,
      extData: {
        title: '今日新用户',
        api: '',
        valueStructurePath: ''
      }
    }
  ]
}

export {
  config
}
