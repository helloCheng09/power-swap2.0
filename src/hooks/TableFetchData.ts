import moment from 'moment'
import { TableBaseParamsProps } from '../types/table'
import { ref, onMounted, reactive, UnwrapRef } from 'vue'
import { Form } from 'ant-design-vue'

interface FormStateProps {
  equTypeNumber: string;
  keyword: string;
  startTime: string;
  endTime: string;
  dateRang: [];
}

export function fetchListDemoComApi(fetchApi:any) {
  const tableSearchFormRef = ref()
  const listData = ref([])
  const currentRef = ref(1)
  const totalRef = ref(0)
  const cItem = ref({}) // 表单的详情
  const useForm = Form.useForm

  /**
   * A method of fetch table list data
   * @param {number} pageNum
   * @param {number} pageSize
   * @param searchPramas
   */
  const initList = async(pageNum = 1, pageSize = 12, searchPramas?: any) => {
    console.log(`FELOGS>>>>请求list!pageNum${pageNum}pageSize${pageSize}`)

    const res = await fetchApi({
      pageNum,
      pageSize,
      ...searchPramas
    })

    const data = res.data || {}
    currentRef.value = data.current || 1
    totalRef.value = data.total || 0
    listData.value = data.records || []
  }

  /**
   * A trigger of change pagination params
   * @param {object} params
   */
  const onEmit = async(params: TableBaseParamsProps) => {
    const { pageNum, pageSize } = params
    await initList(pageNum, pageSize)
  }

  const formState: UnwrapRef<FormStateProps> = reactive({
    equTypeNumber: '',
    keyword: '',
    startTime: '',
    endTime: '',
    dateRang: []
  })

  // Search
  const onTableSearch = async() => {
    if (formState.dateRang.length) {
      const dateTime = formState.dateRang[0] || ''
      // @ts-ignore
      const dateOne = moment(dateTime).format('YYYY-MM-DD')
      // @ts-ignore
      const dateTwo = moment(formState.dateRang[1]).format('YYYY-MM-DD')
      formState.startTime = dateOne || ''
      formState.endTime = dateTwo
    }

    await initList(1, 12, formState)
  }

  // 重要 - 初始化表单 - 初始值赋值给重置方法
  const { resetFields } = useForm(formState)

  /**
   * Reset search form
   */
  const onResetSearchForm = async() => {
    // tableSearchFormRef.value.resetFields()
    resetFields()
    await initList(1, 12)
  }

  /**
   * View row details
   * @param record
   */
  const customRow = (record: any) => {
    return {
      onClick: () => {
        cItem.value = record
      }
    }
  }

  onMounted(async() => {
    await initList()
  })

  return {
    tableSearchFormRef,
    initList,
    onTableSearch,
    onEmit,
    customRow,
    listData,
    totalRef,
    currentRef,
    onResetSearchForm,
    formState,
    cItem
  }
}
