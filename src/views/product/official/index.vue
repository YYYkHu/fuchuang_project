<template>
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
@click="searchMirror(keyword)">搜索</el-button
 >
 <el-button type="primary" size="default" @click="getUserInfo()">重置</el-button>
 </el-form-item>
 </el-form>
 </el-card>
  <!-- table展示数据 -->
  <el-card style="margin: 12px 0px">
    <el-button type="primary" size="default" @click="updateUser(row)"
      >添加用户</el-button>
    <el-table style="margin: 12px 0px" border :data="userAll">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="#" type="index" align="center" show-overflow-tooltip></el-table-column>
      

      <el-table-column label="镜像名称" prop="imageRemark" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="系统" prop="imageSystem" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="标签" prop="labelName" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="CPU" prop="recommendedCpu" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="内存" prop="recommendedMemory" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="系统盘" prop="recommendedDataDisk" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="介  绍" prop="imageIntroduce" align="center" show-overflow-tooltip></el-table-column>


      <el-table-column label="操作" width="200px" align="center">
        
        <template #="{ row, $index }">
          <el-button
            type="warning"
            size="small"
            icon="Edit"
            @click="updateUser(row)"
            >编辑</el-button
          >

          <el-popconfirm :title="`确定要删除吗？`" width="200px" @confirm="row.id;">
            <template #reference>
              <el-button slot="reference" icon="Delete" color="red" size="small" margin-left="10px"
                @click="removeContainer(row)">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[5, 7, 9, 10]"
      :background="true" layout="prev, pager, next,jumper,->,sizes,total" :total="total" @current-change="getUserInfo" />
  </el-card>
《
  <el-dialog title="编辑镜像" v-model="changerDialogVisible" width="500px">
    <el-form ref="form">
      <el-form-item label="镜像名称:">
        <el-input placeholder="请输入镜像名" v-model="userAll_change"></el-input>
      </el-form-item>
      
      <el-form-item label="系统" >
          <el-select v-model="k1">
            
            <el-option label="kylin"></el-option>
            <el-option label="ubuntu"></el-option>
            
          </el-select>
        </el-form-item>

        <el-form-item label="cpu" >
          <el-select >
            
            <el-option label="1"></el-option>
            <el-option label="2"></el-option>
            <el-option label="3"></el-option>
            <el-option label="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内存" >
          <el-select >
           
            <el-option label="1"></el-option>
            <el-option label="2"></el-option>
            <el-option label="3"></el-option>
            <el-option label="4"></el-option>
            <el-option label="5"></el-option>
            <el-option label="6"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="系统盘" >
          <el-select >
            <el-option label="10"></el-option>
            <el-option label="20"></el-option>
            <el-option label="30"></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="系统盘" >
          <el-select >
            <el-option label="工作"></el-option>
            <el-option label="学习"></el-option>
            <el-option label="生产"></el-option>
            <el-option label="娱乐"></el-option>
            <el-option label="生产"></el-option>
            <el-option label="生产"></el-option>
            <el-option label="生产"></el-option>
            <el-option label="生产"></el-option>
            <el-option label="生产"></el-option>
          </el-select>
        </el-form-item>

      <el-form-item label="介绍:">
        <el-input
          placeholder="请输入镜像介绍"
          
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changerDialogVisible = false">取 消</el-button>
        <el-button type="primary" >确 定</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="centerDialogVisible" :title="RoleParam ? '更新' : '添加'">
    <el-form :model="RoleParam" :rules="rules" ref="form">
      <el-form-item label="镜像名称">
        <el-input placeholder="请输入镜像名称"></el-input>
      </el-form-item>
      <el-form-item label="系统">
        <el-input placeholder="请输入系统"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input placeholder="请输入标签"></el-input>
      </el-form-item>
      <el-form-item label="推荐CPU">
        <el-input placeholder="请输入推荐CPU"></el-input>
      </el-form-item>
      <el-form-item label="推荐内存">
        <el-input placeholder="请输入推荐内存"></el-input>
      </el-form-item>
      <el-form-item label="推荐系统盘">
        <el-input placeholder="请输入推荐系统盘"></el-input>
      </el-form-item>
      <el-form-item label="推荐数据盘">
        <el-input placeholder="请输入推荐数据盘"></el-input>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input placeholder="请输入镜像介绍"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from "vue";
import {reqofficalmirror,reqOfficialSearchMirror} from "../../../api/mirror/index";
import { offical_responsedata,Records,responseData} from "../../../api/mirror/type";
import { ElMessage } from "element-plus";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(10);
// 总条数
let total = ref<number>(0);
// 存储的数组
let userAll = ref<Records>([]);
const userAll_change = ref<responseData>();
// 存储已有品牌的数组
let ContainerArr = ref<Records>([]);
// 对话框
let centerDialogVisible = ref<boolean>(false);
// 获取form实例对象
let form = ref<any>(null);

const keyword =ref("");
const k1 =ref("");
const k2 =ref("");


let changerDialogVisible = ref<boolean>(false);
const updateUser = (row: offical_responsedata) => {
  changerDialogVisible.value = true;
};
// 挂载
onMounted(() => {
  getUserInfo();
});
//重写api接口
const reqofficalmirror = async () => {
  try {
    const response = await fetch('http://pllysun.top:9527/image/official/1');
    const data = await response.json();
    console.log('Response from reqofficalmirror:', data);
    return data;
  } catch (error) {
    console.error('Error in reqofficalmirror:', error);
    throw error;
  }
};

// 获取信息
const getUserInfo = async () => {
  const result:offical_responsedata= await reqofficalmirror();
  console.log(result);
  if (result.code === 0) {
    userAll.value = result.data;
    total.value=10;
  }
};

// 搜索镜像
const searchMirror = async (keyword: string) => {
 const id = pageNo.value;
const result: offical_responsedata = await reqOfficialSearchMirror(
 id,
 keyword
 );
 if (result.code == 0) {
  userAll.value = result.data;
  total.value=1;
 ElMessage({
 type: "success",
 message: "响应成功",
 });
console.log(userAll);
 } else {
 ElMessage({
 type: "error",
 message: "响应失败",
 });
}
};

</script>

<style scoped></style>
