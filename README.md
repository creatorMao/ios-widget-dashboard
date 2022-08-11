# dashboard
一个ios小组件风格的仪表盘

A ios widget style dashboard

<a href="https://creatormao.github.io/ios-widget-dashboard/#/" target="_blank">在线效果预览地址</a>


<img src="./src/assets/example.jpg"></img>


## 技术栈
- Vue2
- Less

## TODO
还未完成，只开发额10%左右...(2022-08-11)

## 使用步骤

### 1.安装依赖
```
npm install
```

### 2. 启动开发环境

```
npm run serve
```

### 3. 按需修改配置

路径:\src\views\dashboardConfig.js

```
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
    }
  ]
}

export {
  config
}
```
