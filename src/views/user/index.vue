<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card style="margin: 12px 0px">
    <el-button type="primary" size="default" @click="addUser"
      >添加用户</el-button
    >
    <el-button type="primary" size="default">批量删除</el-button>
    <el-table style="margin: 12px 0px" border :data="userAll">
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        label="#"
        type="index"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="ID"
        prop="userId"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="用户名"
        prop="username"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="邮箱"
        prop="email"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="手机号"
        prop="phone"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="角色"
        prop="roleId"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="创建时间"
        prop="createTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="更新时间"
        prop="updateTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column label="操作" width="280px" align="center">
        <template #="{ row, $index }">
          <el-button
            type="warning"
            size="small"
            icon="Edit"
            @click="updateUser(row)"
            >编辑</el-button
          >
          
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next,jumper,->,sizes,total"
      :total="total"
      @current-change="getUserInfo"
    />
  </el-card>
  <!-- 对话框 -->
  <el-dialog title="添加用户" v-model="centerDialogVisible" width="500px">
    <el-form ref="form">
      <el-form-item label="用户名:">
        <el-input
          placeholder="请输入用户姓名"
          v-model="userParams.username"
        ></el-input>
      </el-form-item>
      
      <el-form-item label="密码:">
        <el-input
          placeholder="请输入用户密码"
          v-model="userParams.password"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 添加新的用户账号 -->

   <!-- 修改信息对话框 -->
   <el-dialog title="添加用户" v-model="changerDialogVisible" width="500px">
    <el-form ref="form">
      <el-form-item label="用户名:">
        <el-input
          placeholder="请输入用户姓名"
          v-model="userParams_info.name"
        ></el-input>
      </el-form-item>
      
      <el-form-item label="职业Id:">
        <el-input
          placeholder="请输入职业Id"
          v-model="userParams_info.occupationId"
        ></el-input>
      </el-form-item>

      <el-form-item label="手机号:">
        <el-input
          placeholder="请输入用户手机号"
          v-model="userParams_info.phone"
        ></el-input>
      </el-form-item>

      <el-form-item label="邮箱号:">
        <el-input
          placeholder="请输入用户邮箱"
          v-model="userParams_info.email"
        ></el-input>
      </el-form-item>

      <el-form-item label="角色Id:">
        <el-input
          placeholder="请输入角色Id"
          v-model="userParams_info.roleId"
        ></el-input>
      </el-form-item>

    </el-form>

    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save_change">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 更新账号信息 -->
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { reqUserInfo, reqAddUpdateUser,reqUsernumber,reqchangeUserinfo } from "@/api/acl/user/index";
import { UserResponseData, Records, User,Usernumber,ResponseData,User_info_change_Request,User_info_change_response } from "@/api/acl/user/type";
import { ElMessage } from "element-plus";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(7);
// 总条数
let total = ref<number>(0);
// 存储的数组
let userAll = ref<Records>([]);
// 对话框的显示与隐藏
let centerDialogVisible = ref<boolean>(false);
let changerDialogVisible = ref<boolean>(false);
// 收集用户的参数
let userParams = reactive<User>({
  username: "",
  
  password: "",
});
let userParams_info = reactive<User_info_change_Request>({
    email: "",
    name: "",
    occupationId: "",
    phone: "",
    roleId: "",
    username: "",
});

// 挂载
onMounted(() => {
  getUserNumber();
  getUserInfo();
});
//获得用户总数量
const getUserNumber =async()=>{
    const result:Usernumber=await reqUsernumber();
    if(result.code===0){
      total.value=result.data;
    }
}
// 获取用户信息
const getUserInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: UserResponseData = await reqUserInfo(
    pageNo.value,
    pageSize.value
  );
  if (result.code === 0) {
    userAll.value = result.data;
   
  }
};
// 添加用户信息
const addUser = () => {
  centerDialogVisible.value = true;
};
// 更新用户信息
const updateUser = (row: User) => {
  changerDialogVisible.value = true;
};
// 定义确定按钮的事件回调
const save = async () => {
  // 点击保存,添加
  const result: ResponseData = await reqAddUpdateUser(userParams);
  if (result.code === 0) {
    centerDialogVisible.value = false;
    // 提示消息
    ElMessage({
      message: "添加成功",
      type: "success",
    });
    // 重新获取数据
    getUserInfo();
  } else {
    ElMessage({
      message: "用户名已存在",
      type: "error",
    });
  }
};

const save_change = async () => {
  // 点击保存,添加
  let result: User_info_change_response = await reqchangeUserinfo(userParams_info);
  if (result.code===0) {
    changerDialogVisible.value = false
    // 提示消息
    ElMessage({
      message: "修改成功",
      type: "success",
    });
    // 重新获取数据
    getUserInfo();
  } else {
    ElMessage({
      message: "修改失败",
      type: "error",
    });
  }
};
</script>

<style scoped></style>
