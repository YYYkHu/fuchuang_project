<template>
  <div>
    <el-card>
      <!-- 搜索 -->
      <el-form>
        <el-form-item label="查询类型" label-width="80px">
          <el-select style="margin-left: 20px" :span="5">
            <el-option label="邵阳"></el-option>
            <el-option label="邵阳"></el-option>
            <el-option label="邵阳"></el-option>
            <el-option label="邵阳"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" style="margin: 10px 0px">
      <!-- 添加用户 -->
      <el-button type="primary" size="default">添加用户</el-button>
      <el-table style="margin: 10px 0" border :data="trademarkArr">
        <!-- 表格列配置 -->
        <el-table-column
          label="序号"
       
          align="center"
          type="index"
        ></el-table-column>

        <el-table-column
          label="logId"
        
          align="center"
          prop="logId"
        ></el-table-column>

        

        <el-table-column 
        label="logTime" 
       
        align="center"
        prop="logTime"
        >
          
        </el-table-column>

        <el-table-column 
        label="logContent" 
    
        align="center"
        prop="logContent"
        >
          
        </el-table-column>

        <el-table-column 
        label="userName" 
    
        align="center"
        prop="userName"
        >
          
        </el-table-column>
        
        <!-- <el-table-column label="修改删除">
          <template #default="{ row, $index }">
            <el-button type="primary" size="" icon="Edit">修改</el-button>
            <el-popconfirm
              :title="`确定要删除${row.tmName}`"
              width="200px"
              @confirm="removeTrademark(row.id)"
            >
              <template #reference>
                <el-button slot="reference" icon="Delete" color="red"
                  >删除</el-button
                >
              </template>
            </el-popconfirm>
          </template>
        </el-table-column> -->
      </el-table>

      <!-- 分页 
        v-model:current-page="pageNo" 当前的页码
        v-model:page-size="pageSize" 每页显示的条数
        :page-sizes="[3, 5, 7, 9]" 下拉菜单的数据
        layout:布局位置
    -->

      <el-pagination
        @current-change="getPageNo"
        page-count="9"
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout="prev, pager, next,jumper,->,sizes,total"
        :total="total"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
// 引入组合式api
import { ref, onMounted, reactive } from "vue";
import {  reqDeleteTradeMark } from "@/api/product/trademark";
import {reqadminlog} from "../../api/log"
import {AdminResponsedata,Records} from "../../api/log/type"

import { ElMessage } from "element-plus";
// 当前的页码
let pageNo = ref<number>(1);
// 每一页的展示数据
let limit = ref<number>(7);
// 存储已有的品牌的数组
let total = ref<number>(0);
// 存储已有品牌的数组
let trademarkArr =ref<Records>([]);
// 获取接口封装给函数
const getHasTrademark =async()=>{
    const result:AdminResponsedata=await reqadminlog();
    if(result.code===0){
      trademarkArr.value =result.data;
      console.log(trademarkArr)
    }
};
// 获取分页器当前页码的函数
// 参数：当前的页码,
const getPageNo = (page: number) => {
  pageNo.value = page;

  getHasTrademark();
};
// 组件挂载完毕
onMounted(() => {
  getHasTrademark();
});
// 删除请求
const removeTrademark = async (id: number) => {
  let result = await reqDeleteTradeMark(id);
  if (result.code == 200) {
    // 剔除成功的提示
    ElMessage({
      type: "success",
      message: "删除成功",
    });
    // 删除成功后重新获取数据
    let newPageNo = pageNo.value;
    trademarkArr.value = trademarkArr.value.filter(
      (trademark) => trademark.id !== id
    );

    // 如果还有剩余的品牌数据，则保持在当前页；否则判断是否为第一页，如果是第一页则保持在第一页，否则退回到上一页
    if (trademarkArr.value.length === 0) {
      newPageNo = Math.max(1, newPageNo - 1);
    }

    getHasTrademark(newPageNo);
  } else {
    ElMessage({
      type: "error",
      message: "删除失败",
    });
  }
};
</script>

<style scoped></style>
