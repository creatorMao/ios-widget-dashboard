import bg1 from '@/assets/dashboard-bg1.jpg'

const config = [
  {
    id: 'home',
    backgroundImg: bg1,
    componentList: [
      {
        id: '0',
        componentName: 'Time',
        interval: 1000,
        size: 'default'
      },
      {
        id: '110',
        componentName: 'HeFengWeather',
        size: 'default',
        extData: {
          location: '101210101',
          cityName: '杭州市',
          key: ''
        }
      },
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
        id: '7',
        componentName: 'TwitterFollowers',
        size: 'default',
        interval: 1000 * 60 * 30,
        extData: {
          requestInfo: {
            url: ''
          }
        }
      },
      {
        id: '81',
        componentName: 'GitHubRepoStars',
        size: 'default',
        interval: 1000 * 60 * 30,
        extData: {
          personalAccessToken: '',
          owner: 'creatorMao',
          repo: 'ios-widget-dashboard'
        }
      },
      {
        id: '8',
        componentName: 'TikTokDownloadStatus',
        interval: 1000 * 60 * 30,
        size: 'default-long',
        extData: {
          requestInfo: {
            url: ''
          }
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
          echartsSetting: {
            yAxis: {
              min: 0,
              max: 120
            }
          },
          requestInfo: {
            url: 'http://192.168.1.201:8888/api/cpu/temp',
            valueStructurePath: '.result[0].Sensors[2].Temp'
          }
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
          echartsSetting: {
            yAxis: {
              min: 0,
              max: 120
            }
          },
          requestInfo: {
            url: '',
            config: {
              headers: {

              }
            },
            valueStructurePath: '.values.CurrentTemperature'
          }
        }
      },
      {
        id: '999',
        componentName: 'GitHubRepoCloneTraffic',
        size: 'default',
        interval: 1000 * 60 * 60,
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
        interval: 1000 * 60 * 30,
        extData: {
          title: '今日新增用户',
          requestInfo: {
            url: '',
            valueStructurePath: '.FOLLOWERS_COUNT_CHANGE_TODAY'
          }
        }
      },
      {
        id: '999111',
        componentName: 'CommonCount',
        size: 'default',
        interval: 1000 * 60 * 5,
        extData: {
          title: '阳台温度',
          unitText: '°C',
          requestInfo: {
            url: '',
            config: {
              headers: {
              }
            },
            valueStructurePath: '.values.CurrentTemperature'
          }
        }
      },
      {
        id: '9991111',
        componentName: 'DownloadInfo',
        size: 'default',
        interval: 1000 * 10,
        headerData: {
          title: 'aria2下载'
        },
        extData: {
          downloadingAPI: {
            requestInfo: {
              url: 'http://192.168.1.11:6800/jsonrpc',
              config: {
                method: 'post',
                data: {
                  id: 'xxxxxxxxxxx',
                  jsonrpc: '2.0',
                  method: 'aria2.tellActive',
                  params: ['token:1234', [
                    'gid',
                    'totalLength',
                    'completedLength',
                    'uploadSpeed',
                    'downloadSpeed',
                    'files',
                    'connections',
                    'numSeeders',
                    'seeder',
                    'status',
                    'errorCode',
                    'verifiedLength',
                    'verifyIntegrityPending'
                  ]]
                }
              }
            },
            fields: {
              taskList: 'result',
              taskId: 'gid',
              taskName: 'files[0].path',
              progress: '',
              completedLength: 'completedLength',
              totalLength: 'totalLength',
              downloadSpeed: 'downloadSpeed',
              speedUnit: 'B',
              speedFormatUnit: 'KB'
            }
          },
          completeAPI: {
            requestInfo: {
              url: 'http://192.168.1.11:6800/jsonrpc',
              config: {
                method: 'post',
                data: {
                  id: 'xxxxxxxxxxx',
                  jsonrpc: '2.0',
                  method: 'aria2.tellStopped',
                  params: [
                    'token:1234',
                    -1,
                    1000,
                    [
                      'gid',
                      'totalLength',
                      'completedLength',
                      'uploadSpeed',
                      'downloadSpeed',
                      'connections',
                      'numSeeders',
                      'files',
                      'seeder',
                      'status',
                      'errorCode',
                      'verifiedLength',
                      'verifyIntegrityPending'
                    ]
                  ]
                }
              }
            },
            fields: {
              taskList: 'result',
              taskId: 'gid',
              taskName: 'files[0].path',
              period: ''
            }
          }
        }
      },
      {
        id: '111111111',
        componentName: 'SwitchButton',
        size: 'default',
        interval: 1000 * 10,
        extData: {
          title: 'surface风扇',
          requestInfo: {
            url: '',
            config: {
              headers: {
              }
            },
            valueStructurePath: '.values.On'
          }
        }
      },
      {
        id: '99911111111',
        componentName: 'DownloadInfo',
        size: 'default',
        interval: 1000 * 10,
        headerData: {
          title: '迅雷下载'
        },
        extData: {
          downloadingAPI: {
            requestInfo: {
              url: 'http://192.168.1.11:9090/?url=http://192.168.1.183:3000/task/downloading'
            },
            fields: {
              taskList: '',
              taskId: 'taskId',
              taskName: 'fileName',
              progress: 'progress',
              completedLength: '',
              totalLength: '',
              downloadSpeed: 'downloadSpeed',
              speedUnit: '',
              speedFormatUnit: ''
            }
          },
          completeAPI: {
            requestInfo: {
              url: 'http://192.168.1.11:9090/?url=http://192.168.1.183:3000/task/complete'
            },
            fields: {
              taskList: '',
              taskId: 'taskId',
              taskName: 'fileName',
              period: 'period'
            }
          }
        }
      }
    ]
  },
  {
    id: 'work',
    backgroundImg: bg1,
    componentList: [
      {
        id: '0',
        componentName: 'Time',
        interval: 1000,
        size: 'default'
      }
    ]
  }
]

export {
  config
}
