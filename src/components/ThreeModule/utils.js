const filter = function(data) {
  const {
    batteryCount1,
    batteryCount2,
    batteryCount3,
    totalBattery,
    availableBatteryCount,
    faultBatteryCount,
    unchargedBatteryCount,
    chargedBatteryCount
  } = data
  // set channel number
  // 取出所有键名
  const keyArr = Object.keys(data)
  // 循环健名数组,判断左右通道
  const dataObj = keyArr && keyArr.reduce(
    (c, p) => {
      if (data[p][0] && data[p][0].position === 'left') {
        // 左通道
        c.left.list[p] = data[p]
        c.left.leftKeys.push(p)
      } else if (data[p][0] && data[p][0].position === 'right') {
        // 右通道
        c.right.list[p] = data[p]
        c.right.rightKeys.push(p)
      }
      return c
    },
    {
      left: {
        list: {},
        leftKeys: []
      },
      right: {
        list: {},
        rightKeys: []
      }
    }
  )
  // const channelNumText = store.getters.globalInfo.channelNumText
  // if (channelNumText === '左单通道') {
  //   dataObj.left.list = dataObj.right.list; dataObj.right.list = []
  // }
  // 总量和个数
  dataObj.batteryCount1 = batteryCount1
  dataObj.batteryCount2 = batteryCount2
  dataObj.batteryCount3 = batteryCount3
  dataObj.totalBattery = totalBattery
  dataObj.availableBatteryCount = availableBatteryCount
  dataObj.faultBatteryCount = faultBatteryCount
  dataObj.unchargedBatteryCount = unchargedBatteryCount
  dataObj.chargedBatteryCount = chargedBatteryCount

  return dataObj
}

export { filter }
