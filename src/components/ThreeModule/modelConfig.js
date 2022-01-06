/**
 * 2020-12-24 Walt
 * common config
 * battery setting
 */

const width = Math.ceil(innerWidth * 0.8)
const height = Math.ceil(innerHeight * 0.7)
const bigWidth = Math.ceil(innerWidth * 1)
const bigHeight = Math.ceil(innerHeight * 1)

const modelCss = {
  // initWidth: 360,
  // initHeight: 180
  initWidth: width,
  initHeight: height,
  bigWidth,
  bigHeight
}

const batInitNumber = {
  G: 4,
  H: 3,
  I: 5,
  D: 5,
  E: 3,
  F: 5,
  A: 5,
  B: 4,
  C: 5
}
const rightchannel = ['D', 'E', 'F', 'A', 'B', 'C']
const leftchannel = ['G', 'H', 'I']
const tunnelParmas = {
  width: 6,
  length: 47
}
const panelParams = {
  width: 52,
  height: 1,
  length: 50
}

const leftTransZ = 14

const isbaseone = false
const row1 = -6.6
const row2 = -17
const row3 = 22
const row4 = -13.4
const row5 = -8

const location1 = 'right'
const location2 = 'left'
const newX = 4
const boxplaneMoveZ = 0
const boxplaneMoveZ2 = 10

const common = {
  batInitNumber,
  rightchannel,
  leftchannel,
  tunnelParmas,
  panelParams,
  row4,
  row5,
  allbatdefaultProps: {
    D: {
      isbaseone,
      x: -22,
      z: row1,
      textNumber: 'D',
      location: location1
    },
    E: {
      isbaseone,
      x: -10,
      z: row1,
      textNumber: 'E',
      location: location1
    },
    F: {
      isbaseone,
      x: 2,
      z: row1,
      textNumber: 'F',
      location: location1
    },
    A: {
      isbaseone,
      x: -22,
      z: row2,
      textNumber: 'A',
      location: location1
    },
    B: {
      isbaseone,
      x: -10,
      z: row2,
      textNumber: 'B',
      location: location1
    },
    C: {
      isbaseone,
      x: 2,
      z: row2,
      textNumber: 'C',
      location: location1
    },
    G: {
      isbaseone,
      x: -22,
      z: row3,
      textNumber: 'G',
      location: location2
    },
    H: {
      isbaseone,
      x: -10,
      z: row3,
      textNumber: 'H',
      location: location2
    },
    I: {
      isbaseone,
      x: 2,
      z: row3,
      textNumber: 'I',
      location: location2
    }
  },
  allbatLeftProps: {
    D: {
      isbaseone,
      x: 2,
      z: row1,
      textNumber: 'D',
      location: location1
    },
    E: {
      isbaseone,
      x: -10,
      z: row1,
      textNumber: 'E',
      location: location1
    },
    F: {
      isbaseone,
      x: -22,
      z: row1,
      textNumber: 'F',
      location: location1
    },
    A: {
      isbaseone,
      x: 2,
      z: row2,
      textNumber: 'A',
      location: location1
    },
    B: {
      isbaseone,
      x: -10,
      z: row2,
      textNumber: 'B',
      location: location1
    },
    C: {
      isbaseone,
      x: -22,
      z: row2,
      textNumber: 'C',
      location: location1
    },
    G: {
      isbaseone,
      x: -22,
      z: row3,
      textNumber: 'G',
      location: location2
    },
    H: {
      isbaseone,
      x: -10,
      z: row3,
      textNumber: 'H',
      location: location2
    },
    I: {
      isbaseone,
      x: 2,
      z: row3,
      textNumber: 'I',
      location: location2
    }
  }
}

// const leftconfig = {
//   globalX: -5,
//   globalY: 3.6,
//   globalZ: -12,
//   newZ: 38,
//   newX,
//   location: location2,
//   isbaseone: true,
//   boxplaneMoveZ: boxplaneMoveZ2
// }
// const rightconfig = {
//   globalX: -5,
//   globalY: 3.6,
//   globalZ: 7,
//   newZ: 0,
//   newX,
//   location: location1,
//   isbaseone: true,
//   boxplaneMoveZ
// }

const leftconfig = {
  globalX: -5,
  globalY: 3.6,
  globalZ: 2 - leftTransZ,
  newZ: 38,
  newX,
  location: location2,
  isbaseone: true,
  boxplaneMoveZ: boxplaneMoveZ2
}
const rightconfig = {
  globalX: -3,
  globalY: 3.6,
  globalZ: 2,
  newZ: 0,
  newX,
  location: location1,
  isbaseone: true,
  boxplaneMoveZ
}
const dobuleconfig = {
  globalX: -3,
  globalY: 3.6,
  globalZ: 2,
  newZ: 0,
  newX,
  isbaseone: true,
  boxplaneMoveZ
}

// const commandText = {
//   0: '空闲中',
//   1: '换电准备',
// }

const commandText = param => {
  const command = Number(param)
  let text = '空闲中'
  switch (command) {
    case 1:
    case 2:
      text = '换电准备'
      return text
    case 41:
      text = '无感换电'
      return text
    case 42:
      text = '扫码换点'
      return text
    case 44:
      text = '取消换电'
      return text
    case 5:
      text = '换电开始'
      return text
    case 6:
      text = '拆卸电池'
      return text
    case 7:
      text = '搬运电池'
      return text
    case 8:
      text = '安装电池'
      return text
    case 9:
      text = '换电完成'
      return text
    case 444:
      text = '换电告警'
      return text
    default:
      return text
  }
}

const batlist5 = { 'success': true, 'code': 200, 'message': '操作成功！', 'queryResult': { 'data': { 'faultBatteryCount': 1, 'A': [
  { 'flag': true, 'systemId': 'A1', 'chargeNo': '11', 'batNum': 116, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': false, 'batteryOtherStatus': '故障', 'soc': 100, 'batteryNo': null },
  { 'flag': true, 'systemId': 'A2', 'chargeNo': '12', 'batNum': 117, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '空闲', 'soc': 50.9, 'batteryNo': '03HPE0380001AKA730000005' },
  { 'flag': true, 'systemId': 'A3', 'chargeNo': '13', 'batNum': 118, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 22, 'batteryNo': null },
  { 'flag': true, 'systemId': 'A4', 'chargeNo': '14', 'batNum': 119, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 11, 'batteryNo': null },
  { 'flag': true, 'systemId': 'A5', 'chargeNo': '15', 'batNum': 120, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' }],
'B': [{ 'flag': true, 'systemId': 'B2', 'chargeNo': '22', 'batNum': 122, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'B3', 'chargeNo': '23', 'batNum': 123, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'B4', 'chargeNo': '24', 'batNum': 124, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'B5', 'chargeNo': '25', 'batNum': 125, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }], 'C': [{ 'flag': true, 'systemId': 'C1', 'chargeNo': '31', 'batNum': 126, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'C2', 'chargeNo': '32', 'batNum': 127, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'C3', 'chargeNo': '33', 'batNum': 128, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '空闲', 'soc': 33.7, 'batteryNo': '03HPE0380001AKA8H0000003' }, { 'flag': true, 'systemId': 'C4', 'chargeNo': '34', 'batNum': 129, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'C5', 'chargeNo': '35', 'batNum': 130, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }], 'D': [{ 'flag': true, 'systemId': 'D1', 'chargeNo': '41', 'batNum': 111, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'D2', 'chargeNo': '42', 'batNum': 112, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '充电中', 'soc': 1.7, 'batteryNo': '03HPE0380001AKA8E0000003' }, { 'flag': true, 'systemId': 'D3', 'chargeNo': '43', 'batNum': 113, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'D4', 'chargeNo': '44', 'batNum': 114, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'D5', 'chargeNo': '45', 'batNum': 115, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }], 'E': [{ 'flag': true, 'systemId': 'E3', 'chargeNo': '53', 'batNum': 108, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'E4', 'chargeNo': '54', 'batNum': 109, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'E5', 'chargeNo': '55', 'batNum': 110, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }], 'unchargedBatteryCount': 2,

'F': [{ 'flag': true, 'systemId': 'F1', 'chargeNo': '61', 'batNum': 101, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'F2', 'chargeNo': '62', 'batNum': 102, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'F3', 'chargeNo': '63', 'batNum': 103, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'F4', 'chargeNo': '64', 'batNum': 104, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100, 'batteryNo': null }, { 'flag': true, 'systemId': 'F5', 'chargeNo': '15', 'batNum': 120, 'isAvailable': 1, 'position': 'right', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' }],

'I': [
  { 'flag': true, 'systemId': 'I5', 'chargeNo': 'I3', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'I4', 'chargeNo': 'I4', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'I3', 'chargeNo': 'I3', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'I2', 'chargeNo': 'I2', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'I1', 'chargeNo': 'I1', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' }
],

'H': [
  { 'flag': true, 'systemId': 'H3', 'chargeNo': 'H3', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'H2', 'chargeNo': 'H2', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'H1', 'chargeNo': 'H1', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' }
],
'G': [
  { 'flag': true, 'systemId': 'G4', 'chargeNo': 'G4', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'G3', 'chargeNo': 'G3', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'G2', 'chargeNo': 'G2', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' },
  { 'flag': true, 'systemId': 'G1', 'chargeNo': 'G1', 'batNum': 120, 'isAvailable': 1, 'position': 'left', 'batteryFaultStatus': true, 'batteryOtherStatus': '满电', 'soc': 100.0, 'batteryNo': '03HPE0380001AKA730000009' }
],

'batteryThermalRunaway': [], 'availableBatteryCount': 0, 'chargedBatteryCount': 2, 'totalBattery': 4 }, 'total': 13 }

}

export default modelCss
export { common, leftconfig, rightconfig, dobuleconfig, commandText, leftTransZ, batlist5 }
