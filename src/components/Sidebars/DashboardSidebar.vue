<template>

  <!-- Main Sidebar -->
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    collapsed-width="0"
    width="250px"
    :collapsed="sidebarCollapsed"
    :trigger="null"
    :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
    theme="light"
    :style="{ backgroundColor: 'transparent',}"
    @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
  >
    <div class="brand">
      <svg-icon name="logo" style="width: 30px;height: 30px;color: #2c2c2c;" />
      <span>AIOS Admin</span>
    </div>
    <hr>
    <!-- Sidebar Navigation Menu -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys2"
      :theme="sidebarTheme"
      mode="inline"
    >
      <a-sub-menu key="sub1">
        <template #icon>
          <svg-icon class="ant_menu_submenu_icon" name="dashboard" />
        </template>
        <template #title>Menu One</template>
        <a-menu-item-group key="g1">
          <a-menu-item key="/panel" class="ant_menu_link_item">
            <router-link to="/panel">
              <span class="ant_menu_spot " />
              panel
            </router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <svg-icon class="ant_menu_submenu_icon" name="icon1" />
        </template>
        <template #title>Menu Two</template>
        <a-menu-item-group key="g2">
          <a-menu-item key="/table" class="ant_menu_link_item">
            <router-link to="/table-main">
              <span class="ant_menu_spot" />
              table
            </router-link>
          </a-menu-item>
          <a-menu-item key="/table-dic" class="ant_menu_link_item">
            <router-link to="/table-dic">
              <span class="ant_menu_spot" />
              table-dic
            </router-link>
          </a-menu-item>
          <a-menu-item key="/upload" class="ant_menu_link_item">
            <router-link to="/upload">
              <span class="ant_menu_spot" />
              upload
            </router-link>
          </a-menu-item>
        </a-menu-item-group>

      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <svg-icon class="ant_menu_submenu_icon" name="icon3" />
        </template>
        <template #title>Menu Three</template>
        <a-menu-item-group key="g3">
          <a-menu-item key="/chart" class="ant_menu_link_item">
            <router-link to="/chart">
              <span class="ant_menu_spot" />
              chart
            </router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
    <!-- </a-menu>-->
    <!-- / Sidebar Navigation Menu -->

    <!-- Sidebar Footer -->
    <!--    <div class="aside-footer">-->
    <!--      <div class="footer-box">-->
    <!--        <span class="icon">-->
    <!--          <svg-icon name="icon2" style="font-size: 1.4rem;" />-->
    <!--        </span>-->
    <!--        <h6>Demo One</h6>-->
    <!--        <p>Please check our docs</p>-->
    <!--        <a-button type="primary" href="#" block target="_blank">-->
    <!--          AIOS-->
    <!--        </a-button>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- / Sidebar Footer -->
  </a-layout-sider>
  <!-- / Main Sidebar -->

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false
    },

    // Main sidebar color.
    sidebarColor: {
      type: String,
      default: 'primary'
    },

    // Main sidebar theme : light, white, dark.
    sidebarTheme: {
      type: String,
      default: 'light'
    }
  },
  setup(props, context) {
    const openKeys = ref<string[]>(['sub1', 'sub2', 'sub3'])
    // const openKeys = ref<string[]>([])
    const selectedKeys2 = ref<string[]>([])

    const router = useRouter()
    const fullPath = router.currentRoute.value.fullPath
    openKeys.value.push(fullPath)
    selectedKeys2.value.push(fullPath)

    onMounted(() => {
    })

    return {
      openKeys,
      selectedKeys2
    }
  }
})
</script>
