<template>
  <div style="display: flex;justify-content: space-between;">
    <card-bar-chart class="chart_item" />
    <card-line-chart class="chart_item" />
  </div>
</template>

<script>
// Bar chart for "Active Users" card.
import CardBarChart from '../components/Cards/CardBarChart.vue'
// Line chart for "Sales Overview" card.
import CardLineChart from '../components/Cards/CardLineChart.vue'

export default {
  name: 'Chart',
  components: { CardLineChart, CardBarChart }
}
</script>

<style>
.chart_item {
  width: 48%;
}
</style>
