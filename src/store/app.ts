/**
 * ------------------------------------------------------------------
 * Store app
 * @data 2021-10-11
 * @author WaltChan<1814638551@qq.com>
 * ------------------------------------------------------------------
 */
// @ts-ignore
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    appSpin: true,
    layoutSpin: false
  }),
  actions: {
    changeSpinStatus(newStatus: boolean) {
      this.appSpin = newStatus
    },
    changeLayoutSpin(newStatus: boolean) {
      this.layoutSpin = newStatus
    }
  }
})
