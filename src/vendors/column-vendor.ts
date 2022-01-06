/**
 * ------------------------------------------------------------------
 * Column
 * @data 2021-10-11
 * @author WaltChan<1814638551@qq.com>
 * ------------------------------------------------------------------
 */

import { format1 } from './column-format'
const customRender = (text: any) => {
  return text.text || '--'
}
const comProps = {
  align: 'center',
  customRender
}

// mock list columns
export const demoTableColumn = [
  {
    width: 77,
    title: '序号',
    // sorter: true,
    slots: { customRender: 'index' },
    ...comProps
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    ...comProps
  },
  {
    width: 200,
    title: '权限',
    // sorter: true,
    dataIndex: 'permission',
    key: 'permission',
    ...comProps
  },
  {
    width: 77,
    title: '是否允许',
    dataIndex: 'allowModify',
    key: 'allowModify',
    align: 'center',
    customRender: (text: any) => {
      const item = +text.record.allowModify || 0
      return format1(item)
    }
  },
  {
    width: 200,
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime',
    ...comProps
  }
  // {
  //   width: 100,
  //   title: 'Action',
  //   key: 'action',
  //   slots: { customRender: 'action' },
  //   fixed: 'right',
  //   ...comProps
  // }
]
/**
 * 分页查询设备列表
 */
export const columnTableReg = [
  // {
  //   width: 77,
  //   title: '序号',
  //   slots: { customRender: 'index' },
  //   align: 'center'
  // },
  {
    title: 'id',
    width: 77,
    dataIndex: 'id',
    key: 'id',
    ...comProps
  },
  {
    title: '设备名称',
    dataIndex: 'equName',
    key: 'equName',
    ...comProps
  },
  {
    title: '设备编码',
    dataIndex: 'equCode',
    key: 'equCode',
    ...comProps
  },
  {
    title: '设备编号',
    dataIndex: 'equNum',
    key: 'equNum',
    ...comProps
  },
  // {
  //   title: '设备厂家',
  //   dataIndex: 'equProducer',
  //   key: 'equProducer',
  //   ...comProps
  // },
  // {
  //   title: '设备类型',
  //   dataIndex: 'equType',
  //   key: 'equType',
  //   ...comProps
  // },
  {
    width: 180,
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    ...comProps
  }
]
/**
 * 故障分类
 */
export const columnTableDic = [
  // {
  //   width: 77,
  //   title: '序号',
  //   slots: { customRender: 'index' },
  //   align: 'center'
  // },
  {
    width: 77,
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    ...comProps
  },
  {
    title: '设备类型名称',
    dataIndex: 'equTypeName',
    key: 'equTypeName',
    ...comProps
  },
  {
    title: '设备类型编号',
    dataIndex: 'equTypeNumber',
    key: 'equTypeNumber',
    ...comProps
  },
  {
    title: '故障等级',
    dataIndex: 'level',
    key: 'level',
    ...comProps
  },
  {
    title: '故障等级2',
    dataIndex: 'name',
    key: 'name',
    ...comProps
  },
  {
    title: '故障等级1',
    dataIndex: 'number',
    key: 'number',
    ...comProps
  },
  {
    width: 180,
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    ...comProps
  }
]
