/**
 * ------------------------------------------------------------------
 * Demo-Api module
 * @data 2021-10-01
 * @author WaltChan<1814638551@qq.com>
 * ------------------------------------------------------------------
 */
import axios from '../utils/request'
import { TableBaseParamsProps, TableBaseResProps, TableDeleteParamsProps, HandleBaseResProps } from '../types/table'
import { useAppStore } from '../store/app'
// 调用函数 获取store
const appStore = useAppStore()

/**
 * 分页查询设备列表
 * Test api about table list
 * @param data
 * http://192.168.2.128/manager/busEquipment/findAll?pageNum=1&pageSize=20
 */
export async function fetchList(data: TableBaseParamsProps) {
  appStore.changeLayoutSpin(true)

  const res = await axios.request<TableBaseResProps>(
    '/busEquipment/findAll',
    {
      data
    }
  )

  appStore.changeLayoutSpin(false)

  return res
}

/**
 * 删除设备列表项
 * Delete row api
 * http://localhost:9912/manager/busEquipment/deleteEquipment
 */
export async function deleteEquipment(data: TableDeleteParamsProps) {
  appStore.changeLayoutSpin(true)
  const res = await axios.request<HandleBaseResProps>(
    '/busEquipment/deleteEquipment',
    {
      data
    }
  )
  appStore.changeLayoutSpin(false)

  return res
}

/**
 * Upload file api
 * @param data
 */
export async function uploadFile(data: any) {
  const res = await axios.request<any>(
    '/manager/file/upload?businessId=adfafg',
    {
      data
    }
  )

  return res
}

/**
 * 分页查询故障类别列表
 * Test api about table list
 * @param data
 *  http://192.168.2.128/manager/faultDict/findAll
 */
export async function fetchList2(data: TableBaseParamsProps) {
  appStore.changeLayoutSpin(true)
  const res = await axios.request<TableBaseResProps>(
    '/faultDict/findAll',
    {
      data
    }
  )
  appStore.changeLayoutSpin(false)

  return res
}
/**
 * 删除故障列表项
 * Delete row api
 * http://localhost:9912/manager/faultDict/deleteFaultDict
 */
export async function deleteFaultDict(data: TableDeleteParamsProps) {
  appStore.changeLayoutSpin(true)
  const res = await axios.request<HandleBaseResProps>(
    '/faultDict/deleteFaultDict',
    {
      data
    }
  )
  appStore.changeLayoutSpin(false)

  return res
}

/**
 * 新增故障分类
 * Add row api
 */
export async function addFaultDict(data: any) {
  appStore.changeLayoutSpin(true)
  const res = await axios.request<HandleBaseResProps>(
    '/faultDict/addFaultDict',
    {
      data
    }
  )
  appStore.changeLayoutSpin(false)

  return res
}
