<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="容器名">
        <el-input placeholder="请输入容器名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card style="margin: 12px 0px">
    <el-table style="margin: 12px 0px" border :data="userAll">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="#" type="index" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="ID" prop="podControllerId" align="center" show-overflow-tooltip></el-table-column>

      

      <el-table-column label="容器名" prop="containerName" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="网络id" prop="networkId" align="center" show-overflow-tooltip></el-table-column>
      
      <el-table-column label="网络名称" prop="networkId" align="center" show-overflow-tooltip></el-table-column>
      
      <el-table-column label="用户id" prop="userId" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="ip地址" prop="ipAddress" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="状态" prop="containerState" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="桌面版本" prop="podControllerVersion" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="桌面Cpu" prop="podControllerCpu" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="桌面Memory" prop="podControllerMemory" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="桌面DataDisk" prop="podControllerDataDisk" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="创建时间" prop="createTime" align="center" show-overflow-tooltip></el-table-column>

      <el-table-column label="最近开机时间" prop="updateTime" align="center" show-overflow-tooltip></el-table-column>
     

      <!-- <el-table-column label="操作" width="200px" align="center">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit" @click="updateContainer">编辑</el-button>

          <el-popconfirm :title="`确定要删除${row.tmName}`" width="200px" @confirm="row.id;">
            <template #reference>
              <el-button slot="reference" icon="Delete" color="red" size="small" margin-left="10px"
                @click="removeContainer(row)">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column> -->
    </el-table>

    <!-- 分页 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[5, 7, 9, 11]"
      :background="true" layout="prev, pager, next,jumper,->,sizes,total" :total="total" @current-change="getUserInfo" />
  </el-card>
<!-- 
  <el-dialog title="修改容器信息" v-model="centerDialogVisible">
    <el-form :model="RoleParam" :rules="rules" ref="form">
      <el-form-item label="容器名称">
        <el-input placeholder="请输入容器名称"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input placeholder="请输入状态"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input placeholder="请输入创建时间"></el-input>
      </el-form-item>
      <el-form-item label="最近开机时间">
        <el-input placeholder="请输入最近开机时间"></el-input>
      </el-form-item>
      <el-form-item label="ip地址">
        <el-input placeholder="请输入ip地址"></el-input>
      </el-form-item>
      <el-form-item label="CPU">
        <el-input placeholder="请输入CPU"></el-input>
      </el-form-item>
      <el-form-item label="内存">
        <el-input placeholder="请输入内存"></el-input>
      </el-form-item>
      <el-form-item label="系统盘">
        <el-input placeholder="请输入系统盘"></el-input>
      </el-form-item>
      <el-form-item label="数据盘">
        <el-input placeholder="请输入数据盘"></el-input>
      </el-form-item>
      <el-form-item label="所属网络">
        <el-input placeholder="请输入所属网络"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
  </el-dialog> -->
  <!-- 分页 -->
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from "vue";
import {reqAllUsersContainer} from "../../api/container/index"
import {ContainerResponseData,AllUserContainerResponseData,Container,Records} from "../../api/container/type"
import { ElMessage } from "element-plus";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(7);
// 总条数
let total = ref<number>(0);
// 存储的数组
let userAll = ref<Records>([]);
// 存储已有品牌的数组
let ContainerArr = ref<Records>([]);
// 对话框
let centerDialogVisible = ref<boolean>(false);
// 获取form实例对象
let form = ref<any>(null);

// 挂载
onMounted(() => {
  getUserInfo();
});

// 获取用户信息
const getUserInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: AllUserContainerResponseData = await reqAllUsersContainer();
console.log(result);
  if (result.code === 0) {
    userAll.value =result.data.rows;
   total.value=result.data.total;
  }
};
// // 删除用户
// const removeContainer = async (id: number) => {
//   let result = await reqDeleteUser(id);
//   if (result.code == 200) {
//     // 剔除成功的提示
//     ElMessage({
//       type: "success",
//       message: "删除成功",
//     });
//     // 删除成功后重新获取数据
//     let newPageNo = pageNo.value;
//     ContainerArr.value = ContainerArr.value.filter(
//       (trademark) => trademark.id !== id
//     );
//     // 如果还有剩余的品牌数据，则保持在当前页；否则判断是否为第一页，如果是第一页则保持在第一页，否则退回到上一页
//     if (ContainerArr.value.length === 0) {
//       newPageNo = Math.max(1, newPageNo - 1);
//     }
//     // 重新获取数据
//     getUserInfo(newPageNo);
//   } else {
//     ElMessage({
//       type: "error",
//       message: "删除失败",
//     });
//   }
// };
// 修改用户信息 括号中绑定对象row:类型
const updateContainer = (row: User) => {
  centerDialogVisible.value = true;
  // 修改用户信息时，将当前行的数据赋值给表单
  Object.assign(RoleParam, row);
};
// 收集修改的表单数据
let RoleParam = reactive({});
//  自定义校验规则
const validatorName = (rule: any, value: any, callback: any) => {
  if (value.trim().length >= 2) {
    callback();
  } else {
    callback(new Error("用户名不能小于2位"));
  }
};
// 校验规则
const rules = {
  containerName: [
    { required: true, trigger: "blur", validator: validatorName },
  ],
};
// 确定按钮的回调
const save = async () => {
  // 表单校验通过，才调用接口函数
  await form.value.validate();
  // 添加更新请求
  // let result = await reqUpdateContainer(RoleParam);
  // if(result.code == 200){
  //   ElMessage({
  //     type: "success",
  //     message: "修改成功",
  //   });
  // 关闭弹窗
  centerDialogVisible.value = false;
  // 重新获取数据
  getUserInfo(pageNo.value);
  //   }else{
  //     ElMessage({
  //       type: "error",
  //       message: "修改失败",
  //     });
  //   }
};

// 添加表达的方法
const addContainer = () => {
  centerDialogVisible.value = true;
  // 清空数据
  Object.assign(RoleParam, {
    roleName: "",
  });
  // 清空上一次表单的错误结果,roleName为校验字段
  nextTick(() => {
    form.value.clearValidate("roleName");
  });
};
</script>

<style scoped></style>
