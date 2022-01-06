import { Moment } from 'moment'
import { ref } from 'vue'

export function TimePickApi() {
  const open = ref(false)
  const open2 = ref(false)
  const value = ref<Moment>()

  const handleOpenChange = (openStatus: boolean) => {
    console.log('open', openStatus)
    open.value = openStatus
  }

  const handleClose = () => {
    open.value = false
    open2.value = false
  }

  return {
    value,
    open,
    open2,
    handleOpenChange,
    handleClose
  }
}
