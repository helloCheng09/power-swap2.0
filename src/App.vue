<template>
  <a-spin v-show="appStore.appSpin" id="AppSpin" size="large" tip="加载中" />
  <a-config-provider :locale="locale">
    <component :is="layout" v-show="!appStore.appSpin">
      <router-view />
    </component>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import en_US from 'ant-design-vue/es/locale/en_US'
import { useAppStore } from './store/app'
import { onMounted } from 'vue'

export default ({
  setup() {
    // 调用函数 获取store
    const appStore = useAppStore()

    onMounted(() => {
      appStore.changeSpinStatus(false)
    })
    return { appStore }
  },
  data() {
    return {
      locale: zhCN
    }
  },
  computed: {
    // Sets components name based on current route's specified layout, defaults to
    // <layout-default></layout-default> component.
    layout() {
      return 'layout-' + (this.$route.meta.layout || 'default').toLowerCase()
    }
  }

})
</script>
