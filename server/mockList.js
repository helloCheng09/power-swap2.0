/**
 * Created by WaltChan 2021/07
 */
const mockList = { 'records': [{ 'createTime': '2021-06-01 09:54:48', 'updateTime': null, 'id': 12, 'permissionName': '修改站控基础信息', 'permission': '基础信息管理-编辑 ', 'permissionCode': '20001', 'allowModify': 0 }, { 'createTime': '2021-06-01 09:55:17', 'updateTime': null, 'id': 13, 'permissionName': '修改站控基础信息图片', 'permission': '基础信息管理-修改图片', 'permissionCode': '20002', 'allowModify': 1 }, { 'createTime': '2021-06-01 09:56:48', 'updateTime': null, 'id': 14, 'permissionName': '导出换电订单的列表', 'permission': '换电订单-导出', 'permissionCode': '30001', 'allowModify': 0 }, { 'createTime': '2021-06-01 10:08:19', 'updateTime': null, 'id': 15, 'permissionName': '对电池的开启和禁用操作', 'permission': '电池管理-开启/禁用', 'permissionCode': '40001', 'allowModify': 0 }, { 'createTime': '2021-06-01 10:10:19', 'updateTime': null, 'id': 16, 'permissionName': '充电机充电操作', 'permission': '充电机管理-开始/停止充电', 'permissionCode': '50001', 'allowModify': 1 }, { 'createTime': '2021-06-01 10:10:49', 'updateTime': null, 'id': 17, 'permissionName': '新增一条去电策略', 'permission': '取电策略-新增', 'permissionCode': '60001', 'allowModify': 1 }, { 'createTime': '2021-06-01 10:11:29', 'updateTime': null, 'id': 18, 'permissionName': '修改取电策略', 'permission': '取电策略-编辑', 'permissionCode': '60002', 'allowModify': 1 }, { 'createTime': '2021-06-01 10:51:47', 'updateTime': '2021-06-01 10:52:08', 'id': 19, 'permissionName': '新增电池充电策略', 'permission': '充电策略-新增', 'permissionCode': '70001', 'allowModify': 1 }, { 'createTime': '2021-06-01 10:52:31', 'updateTime': null, 'id': 20, 'permissionName': '删除电池充电策略', 'permission': '充电策略-删除', 'permissionCode': '70002', 'allowModify': 1 }, { 'createTime': '2021-06-01 10:56:03', 'updateTime': '2021-06-01 15:27:18', 'id': 21, 'permissionName': '新增换电广告操作', 'permission': '换电广告-新增图片', 'permissionCode': '80001', 'allowModify': 1 }], 'total': 95, 'size': 10, 'current': 1, 'orders': [], 'searchCount': true, 'pages': 10 }

module.exports = {
  mockList(app, susResponse) {
    app.post('/manager/permission/findPermissionsByPage', async(req, res) => {
      await new Promise(resolve => setTimeout(() => { resolve() }, 100))
      const result = susResponse
      result.data = mockList

      res.json(result)
    })
    app.post('/manager/faultDict/findAll', async(req, res) => {
      await new Promise(resolve => setTimeout(() => { resolve() }, 100))
      const result = susResponse
      result.data = mockList

      res.json(result)
    })
    app.post('/manager/busEquipment/findAll', async(req, res) => {
      await new Promise(resolve => setTimeout(() => { resolve() }, 100))
      const result = susResponse
      result.data = mockList

      res.json(result)
    })
  }
}

