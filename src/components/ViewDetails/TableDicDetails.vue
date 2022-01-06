<template>
  <a-card :bordered="false" class="app_card_wrap table_details_box">
    <div v-if="cItem" class="table_view_details_card">
      <a-typography-title :level="3">查看详情</a-typography-title>
      <a-descriptions :column="1">
        <a-descriptions-item label="ID">{{ cItem.id || '--' }}</a-descriptions-item>
        <a-descriptions-item :label="detailsKeyValueFac.equTypeNumber">{{ cItem.equTypeNumber || '--' }}</a-descriptions-item>
        <a-descriptions-item label="设备编码">{{ cItem.equCode || '--' }}</a-descriptions-item>
        <a-descriptions-item label="故障码">{{ cItem.faultCode || '--' }}</a-descriptions-item>
        <a-descriptions-item label="故障等级">{{ cItem.level || '--' }}</a-descriptions-item>
      </a-descriptions>
      <div class="t_d_btns">
        <a-button type="link" primary @click="onRowEdit(cItem)">修 改</a-button>
        <a-button type="link" danger @click="onRowDelete(cItem)">删 除</a-button>
      </div>
    </div>
    <a-empty v-else style="margin-top: 20vh;" description="点选左侧数据" />
  </a-card>
</template>

<script>
import detailsKeyValueFac from '../../vendors/details-factory'

export default {
  props: {
    cItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      detailsKeyValueFac
    }
  }
}
</script>
