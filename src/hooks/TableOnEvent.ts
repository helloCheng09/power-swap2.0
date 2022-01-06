import { computed, unref, reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
// deleteApi?: any, updateApi?: any, initList?:any
export function onTableEventApi(options?:any) {
  const tableEventState = reactive({
    selectedRowKeys: [],
    selectedRows: []
  })

  /**
   * Select row
   * @param changableRowKeys
   */
  const onSelectChange = (changableRowKeys: [], selectedRows: []) => {
    tableEventState.selectedRowKeys = changableRowKeys
    tableEventState.selectedRows = selectedRows
  }
  const rowSelection = computed(() => {
    return {
      selectedRowKeys: unref(tableEventState.selectedRowKeys),
      onChange: onSelectChange
    }
  })
  /**
   * Delete row
   * @param cItem
   */
  const onRowDelete = async(cItem: any, isMultiple = false) => {
    let deleteIdArr: any = []
    // Delete single row
    if (!isMultiple) {
      deleteIdArr = [cItem.id]
    } else {
      // 异常提示
      if (!tableEventState.selectedRows.length) {
        message.warning('未选择要删除的数据！')
        return false
      }
      // Delete multiple rows
      tableEventState.selectedRows.map((item: {id: number}) => {
        deleteIdArr.push(item.id)
      })
    }

    const res = await options.deleteApi(deleteIdArr) || { code: 400 }
    const resMsg = res.message

    if (res.code === 200) {
      message.success(resMsg)
      options.initList()
    } else {
      message.error(resMsg)
    }
  }
  /**
   * Update row
   * @param cItem
   */
  const onRowEdit = (cItem: any) => {
    console.log(cItem.id)
  }
  // Transfor reative to ref
  const tableEventRefData = toRefs(tableEventState)
  return {
    onRowDelete,
    onRowEdit,
    rowSelection,
    ...tableEventRefData
  }
}

