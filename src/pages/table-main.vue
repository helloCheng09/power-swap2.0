<template>
  <div class="table_container">
    <a-card
      :bordered="false"
      class="app_card_wrap"
    >
      <a-form
        layout="inline"
      >
        <a-form-item label="设备类型编号">
          <a-input
            v-model:value="formState.equTypeNumber"
            allow-clear
            placeholder="请输入设备类型编号"
          />
        </a-form-item>
        <a-form-item label="设备编码" name="keyword">
          <a-input
            v-model:value="formState.keyword"
            allow-clear
            placeholder="请输入设备编码"
          />
        </a-form-item>
        <a-form-item label="时间范围" name="dateRange">
          <a-range-picker v-model:value="formState.dateRang" />
        </a-form-item>
        <a-form-item>
          <a-button
            size="middle"
            @click="onTableSearch"
          >
            查 询
          </a-button>
        </a-form-item>
        <a-form-item>
          <a-button
            size="middle"
            @click="onResetSearchForm"
          >
            重 置
          </a-button>
        </a-form-item>
        <!--        <a-form-item>-->
        <!--          <a-button type="primary" size="middle">新 增</a-button>-->
        <!--        </a-form-item>-->
        <a-form-item>
          <a-button
            danger
            type="primary"
            size="middle"
            @click="onRowDelete(null, true)"
          >
            批量删除
          </a-button>
        </a-form-item>
      </a-form>
      Table Search /

      <!-- Table Content   -->
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
      <!-- Table Content   -->
      <pagination
        ref="Pagination"
        v-model:current="currentRef"
        :total="totalRef"
        @onRefetchData="onEmit"
      />
    </a-card>

    <!-- View Details -->
    <!--    <table-details :c-item="cItem" />-->
    <!-- View Details /-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format1 } from '/@/vendors/column-format'
import { onTableEventApi } from '/@/hooks/TableOnEvent'
import { columnTableReg } from '/@/vendors/column-vendor'
import { deleteEquipment, fetchList } from '/@/api/demo-api'
import { fetchListDemoComApi } from '/@/hooks/TableFetchData'

export default defineComponent({
  name: 'TableMain',
  setup() {
    const stateFetch = fetchListDemoComApi(fetchList)
    const stateEvent = onTableEventApi({
      deleteApi: deleteEquipment,
      initList: stateFetch.initList
    })

    return {
      columns: columnTableReg,
      ...stateFetch,
      ...stateEvent,
      format1
    }
  }
})
</script>

