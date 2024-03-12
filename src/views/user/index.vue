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
    <el-button type="primary" size="default" @click=""
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
          <el-button type="danger" size="small" icon="Delete">删除</el-button>
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
  <el-dialog title="修改用户信息" v-model="centerDialogVisible" width="500px">
    <el-form ref="form">
      <el-form-item label="用户名:">
        <el-input
          placeholder="请输入用户姓名"
          v-model="userParams.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="昵称:">
        <el-input
          placeholder="请输入用户昵称"
          v-model="userParams.name"
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
  <!-- 添加新的用户账号以及更新账号信息 -->
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { reqUserInfo, reqAddUpdateUser } from "@/api/acl/user/index";
import { UserResponseData, Records, User } from "@/api/acl/user/type";
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
// 收集用户的参数
let userParams = reactive<User>({
  username: "",
  name: "",
  password: "",
});

// 挂载
onMounted(() => {
  getUserInfo();
});

// 获取用户信息
const getUserInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: UserResponseData = await reqUserInfo(
    pageNo.value,
    pageSize.value
  );
  if (result.code === 0) {
    userAll.value = result.data;
    total.value = 13;
  }
};
// 添加用户信息
const addUser = () => {
  centerDialogVisible.value = true;
};
// 更新用户信息
const updateUser = (row: User) => {
  centerDialogVisible.value = true;
};
// 定义确定按钮的事件回调
const save = async () => {
  // 点击保存,判断是更新还是添加
  let result: any = await reqAddUpdateUser(userParams);
  if (result.code === 0) {
    centerDialogVisible.value = false;
    // 提示消息
    ElMessage({
      message: userParams.id ? "更新成功" : "添加成功",
      type: "success",
    });
    // 重新获取数据
    getUserInfo();
  } else {
    ElMessage({
      message: "操作失败",
      type: "error",
    });
  }
};
</script>

<style scoped></style>
