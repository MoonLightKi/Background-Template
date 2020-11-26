<template>
  <div class="charts">
    <div id="myChart" style="width: 1200px; height: 300px; background-color: #ffffff"></div>
  </div>
</template>

<script>

export default {
  name: 'chart',
  data() {
    return {
      author: 'WiseWrong',
      option:{
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    myChart.setOption(this.option)
  }
}
</script>