/**
 * Created by WaltChan 2021/10
 * Express js
 * 启动本地服务 模拟前后端交互请求
 */
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

// 成功-数据返回
const susResponse = {
  data: null,
  code: 200,
  message: '操作成功/请求成功'
}
// 失败-数据返回
const failResponse = {
  data: null,
  code: 500,
  message: '操作失败/请求错误'
}

const MockListServer = require('./mockList.js')
// mock list
MockListServer.mockList(app, susResponse, failResponse)

// 设置服务端口
app.listen(9900, () => console.log('http://localhost:9900 服务启动成功！'))
