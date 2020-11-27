<template>
    <div id="home">
    <a-row type="flex" justify="space-around">
      <a-col :span="4">
        <card></card>
      </a-col>
      <a-col :span="4">
        <card></card>
      </a-col>
      <a-col :span="4">
        <card></card>
      </a-col>
      <a-col :span="4">
        <card></card>
      </a-col>
    </a-row>
    <p id="chart" style="margin-top: 30px">
        <card width1="6"></card>
    </p>
  
    <p id="chart" style="margin-top: 30px">
        <Chart></Chart>
    </p>

    </div>
</template>

<script>
import Card from '../utils/Card'
import Chart from '../utils/Chart'

export default {
    data () {
        return {
            msg: '我是phone组件'
        }
    },
    components:{
        Card,
        Chart
    }
}
</script>

<style scoped>
#home {
    background-color: #EFF1F4;
    height: 100%;
    padding: 20px;
}

#chart {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.ant-btn {
    height: 28px;
    padding: 0 12px;
    font-size: 12px;
}

</style>