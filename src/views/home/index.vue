<!-- <template>
  <div>
    <h1>一级路由Home</h1>
  </div>
</template> -->

<!-- <script setup lang="ts">
// // 引入生命周期函数
// import { onMounted } from "vue";
// // 获取仓库
// import useUserStore from "@/store/modules/user";
// let userStore = useUserStore();

// onMounted(() => {
//   // 目前是首页挂载完毕发请求获取用户信息
//   userStore.userInfo();
// });
// 从路由守卫中获取
</script>

<style scoped></style> -->

<template>
  <div>
    <el-card class="box-card" style="height: 280px">
      <div ref="chartRef" style="height: 280px"></div>
    </el-card>
  </div>

  <div class="gragh">
    <el-card style="height: 260px">
      <div ref="usechart" style="height: 240px"></div>
    </el-card>
    <el-card style="height: 260px">
      <div ref="userchartone" style="height: 240px"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";


const chartRef = ref<null | HTMLDivElement>(null);
const usechart = ref<null | HTMLDivElement>(null);
const userchartone = ref<null | HTMLDivElement>(null);
onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);
    chart.setOption(options1);
  }
  if (userchartone.value) {
    const chart = echarts.init(userchartone.value);
    chart.setOption(options2);
  }
  if (usechart.value) {
    const chart = echarts.init(usechart.value);
    chart.setOption(options3);
  }
});
/** @type EChartsOption */
const options1 = {
  title: {
    text: "前七日镜像使用数",
    left: "center",
  },
  // echarts 配置项
  xAxis: {
    type: "category",
    data: ["3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3"],
  },
  yAxis: {
    type: "value",
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      data: [21,27, 24, 31, 29, 35, 38],
      type: "bar",
    },
  ],
};
/** @type EChartsOption */
const options2 = {
  title: {
    text: "前七日用户访问数",
    left: "center",
  },
  xAxis: {
    type: "category",
    data: ["3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3"],
  },
  yAxis: {
    type: "value",
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      data: [75, 115, 112, 109, 70, 77, 130],
      type: "line",
    },
  ],
};
/** @type EChartsOption */
const options3 = {
  title: {
    text: "使用中与关闭的容器数比例",
    
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      
      type: "pie",
      radius: "50%",
      data: [
        {  },
        { value: 4, name: "使用中" },
        { },
        { value: 27, name: "关闭中" },
        {  },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
</script>

<style scoped>
.gragh {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>

<!-- <template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import  from "echarts";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style> -->
