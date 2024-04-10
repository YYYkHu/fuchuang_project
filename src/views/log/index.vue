<template>
  <div>
    <el-card class="mirrorsearch">
 <el-form :inline="true">
 <el-form-item label="镜像名">
 <el-input placeholder="请输入镜像名" v-model="keyword"></el-input>
 </el-form-item>
 <el-form-item>
 <el-button
type="primary"
 size="default"
 :disabled="keyword ? false : true"
@click="searchlog(keyword)">搜索</el-button
 >
 <el-button type="primary" size="default" @click="getUserInfo()">重置</el-button>
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
          label="logname"
        
          align="center"
          prop="logTypeName"
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
        @current-change="getPageNo(pageNo,limit)"
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
import {  reqDeleteTradeMark} from "@/api/product/trademark";
import {reqadminlog,Searchadminlog} from "../../api/log"
import {AdminResponsedata,Records} from "../../api/log/type"

import { ElMessage } from "element-plus";
// 当前的页码
let pageNo = ref<number>(1);
// 每一页的展示数据
let limit = ref(7);
// 存储已有的品牌的数组
let total = ref<number>(0);
// 存储已有品牌的数组
let trademarkArr =ref<Records>([]);
// 获取接口封装给函数
const keyword =ref("");
const getHasTrademark =async(page:number,lim:number)=>{
  pageNo.value=page;
  limit.value=lim;
    const result:AdminResponsedata=await reqadminlog(pageNo.value,limit.value);
    console.log(limit)
    if(result.code===0){
      trademarkArr.value =result.data.rows;
      total.value=result.data.total;
      console.log(trademarkArr)
    }
};
// 获取分页器当前页码的函数
// 参数：当前的页码,
const getPageNo = (page: number,lim:number) => {
  pageNo.value = page;
  getHasTrademark(pageNo.value,lim);
};
// 组件挂载完毕
onMounted(() => {
  getHasTrademark(pageNo.value,limit.value);
});


const searchlog = async (keyword: string) => {
 const id = pageNo.value;
const result: AdminResponsedata = await Searchadminlog(
 keyword
 );
 if (result.code == 0) {
  trademarkArr.value = result.data.rows;
  total.value=1;
 ElMessage({
 type: "success",
 message: "响应成功",
 });
console.log(trademarkArr);
 } else {
 ElMessage({
 type: "error",
 message: "响应失败",
 });
}
};
</script>

<style scoped></style>
