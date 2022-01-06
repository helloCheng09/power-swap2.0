<template>
  <div class="table_container">
    <a-card :bordered="false" class="app_card_wrap">
      <!-- Table Search -->
      <a-form layout="inline" :model="formState">
        <a-form-item>
          <a-button type="primary" size="middle">新 增</a-button>
        </a-form-item>
        <a-form-item>
          <a-button danger type="primary" size="middle" @click="onRowDelete(null, true)">批量删除</a-button>
        </a-form-item>
      </a-form>
      <!-- Table Search /-->

      <!-- Table -->
      <a-table
        :pagination="false"
        :data-source="listData"
        :columns="columns"
        :row-key="record => record.id"
        :scroll="{x: '55vw' ,y: 'calc(100vh - 340px)'}"
        class="format_table"
        :row-selection="rowSelection"
        :custom-row="customRow"
      >
        <template #index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
      </a-table>
      <!-- Table /-->

      <pagination :current="currentRef" :total="totalRef" @onRefetchData="onEmit" />
    </a-card>

    <!-- View Details -->
    <!--    <table-dic-details :c-item="cItem" />-->
    <!-- View Details /-->
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { columnTableDic } from '../vendors/column-vendor'
import { format1 } from '../vendors/column-format'
import { fetchListDemoComApi } from '../hooks/TableFetchData'
import { onTableEventApi } from '../hooks/TableOnEvent'
import { deleteFaultDict, fetchList2, addFaultDict } from '../api/demo-api'
import TableDicDetails from '../components/ViewDetails/TableDicDetails.vue'

export default defineComponent({
  name: 'TableDic',
  components: { TableDicDetails },
  setup(prop, context) {
    const stateFetch = fetchListDemoComApi(fetchList2)
    const initList = stateFetch.initList
    const stateEvent = onTableEventApi({ deleteApi: deleteFaultDict, addApi: addFaultDict, initList })

    return {
      ...stateFetch,
      ...stateEvent,
      columns: columnTableDic,
      format1
    }
  }
})
</script>

