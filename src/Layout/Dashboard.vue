<!--
	This is the dashboard layout, used in dashboard, tables, billing and profile pages.
 -->

<template>
  <div>

    <!-- Dashboard Layout -->
    <a-layout id="layout-dashboard" class="layout-dashboard" :class="[navbarFixed ? 'navbar-fixed' : '', ! sidebarCollapsed ? 'has-sidebar' : '', layoutClass]">

      <!-- Main Sidebar -->
      <DashboardSidebar
        :sidebar-collapsed="sidebarCollapsed"
        :sidebar-color="sidebarColor"
        :sidebar-theme="sidebarTheme"
        @toggleSidebar="toggleSidebar"
      />
      <!-- / Main Sidebar -->

      <!-- Layout Content -->
      <a-layout>

        <!-- Layout Header's Conditionally Fixed Wrapper -->
        <DashboardHeader
          :sidebar-collapsed="sidebarCollapsed"
          :navbar-fixed="navbarFixed"
          @toggleSettingsDrawer="toggleSettingsDrawer"
          @toggleSidebar="toggleSidebar"
        />
        <!-- / Layout Header's Conditionally Fixed Wrapper -->

        <!-- Page Content -->
        <a-layout-content>
          <a-spin v-show="appStore.layoutSpin" tip="正在加载" class="layout_spin_1" size="large" />
          <router-view v-show="!appStore.layoutSpin" />
        </a-layout-content>
        <!-- / Page Content -->

        <!-- Layout Footer -->
        <DashboardFooter />
        <!-- / Layout Footer -->

        <!-- Floating Action Button For Toggling Settings Drawer -->
        <a-button class="fab" shape="circle" @click="showSettingsDrawer = true">
          <svg-icon class="ant_menu_submenu_icon" name="setting" />
        </a-button>
        <!-- / Floating Action Button For Toggling Settings Drawer -->

        <!-- Sidebar Overlay -->
        <div v-show="! sidebarCollapsed" class="sidebar-overlay" @click="sidebarCollapsed = true" />
        <!-- / Sidebar Overlay -->

      </a-layout>
      <!-- / Layout Content -->

      <!-- Settings Drawer -->
      <DashboardSettingsDrawer
        :show-settings-drawer="showSettingsDrawer"
        :navbar-fixed="navbarFixed"
        :sidebar-theme="sidebarTheme"
        @toggleSettingsDrawer="toggleSettingsDrawer"
        @toggleNavbarPosition="toggleNavbarPosition"
        @updateSidebarTheme="updateSidebarTheme"
        @updateSidebarColor="updateSidebarColor"
      />
      <!-- / Settings Drawer -->

    </a-layout>
    <!-- / Dashboard Layout -->

  </div>
</template>

<script>
import DashboardSidebar from '../components/Sidebars/DashboardSidebar.vue'
import DashboardHeader from '../components/Headers/DashboardHeader.vue'
import DashboardFooter from '../components/Footers/DashboardFooter.vue'
import DashboardSettingsDrawer from '../components/Sidebars/DashboardSettingsDrawer.vue'
import { useAppStore } from '../store/app'

export default ({
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
    DashboardSettingsDrawer
  },
  setup() {
    // 调用函数 获取store
    const appStore = useAppStore()

    return {
      // App store
      appStore
    }
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,

      // Main sidebar color.
      sidebarColor: 'primary',

      // Main sidebar theme : light, white, dark.
      sidebarTheme: 'light',

      // Header fixed status.
      navbarFixed: false,

      // Settings drawer visiblility status.
      showSettingsDrawer: false
    }
  },
  computed: {
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass
    }
  },
  methods: {
    toggleSidebar(value) {
      this.sidebarCollapsed = value
    },
    toggleSettingsDrawer(value) {
      this.showSettingsDrawer = value
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value
    },
    updateSidebarTheme(value) {
      this.sidebarTheme = value
    },
    updateSidebarColor(value) {
      this.sidebarColor = value
    }
  }
})

</script>
