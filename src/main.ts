/**
=========================================================
 - Vue Ant Design Dashboard - v1.0.0
 - Vue 3.0+
 - vite
=========================================================
 @data 2021-10-01
 @author WaltChan<1814638551@qq.com>
=========================================================
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import 'moment/dist/locale/zh-cn' //  设置 AntD-UI DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
// 全局状态管理类库
import { createPinia } from 'pinia'
import App from './App.vue'
const app = createApp(App)
import DefaultLayout from '/@/Layout/Default.vue'
import DashboardLayout from '/@/Layout/Dashboard.vue'
import DashboardRTLLayout from '/@/Layout/DashboardRTL.vue'
import Pagination from '/@/components/Table/Pagination.vue'
import SvgIcon from '/@/components/SvgIcon/index.vue'// svg component
import router from '/@/router/index'
import '/@/styles/app.scss'

app.config.errorHandler = (err, vm, info) => {
  console.log(err)
}

app
  .use(router)
  .use(Antd)
  .use(createPinia())
  .component('layout-default', DefaultLayout)
  .component('layout-dashboard', DashboardLayout)
  .component('layout-dashboard-rtl', DashboardRTLLayout)
  .component('svg-icon', SvgIcon)
  .component('pagination', Pagination)
  .mount('#app')

