<template>
  <el-card></el-card>
     <el-card style="margin-bottom: 15px;">
    <div class="layout_main">
        <div class="main_left">  
      <el-row>
        <el-col :span="12">
         
            <div class="block"><el-avatar :size="150" :src="circleUrl"></el-avatar></div>
         
        </el-col>
       
      </el-row>
      
          <div class="welcome">
            <p style="display: inline;">Hi,</p>
            <p style="color: #f987f7; display: inline;">{{ username }}</p>
          </div>
    </div>
<div class="main_right">
   <p class="main_right_nickname">{{ nickname }}</p>
   <div class="registration-time">
    <p>注册时间：{{ registrationTime }}</p>
  </div>
</div>
</div>
   </el-card>
   <el-card>
  <p style="font-size: 30px; margin-top: -5px; margin-bottom: -10px;">基本信息</p>
  <el-divider style="border-width: 2px;" />
  
  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">用户名称</p>
    <div style="display: flex; align-items: center;">
      <p style="display: inline;">{{ age }}</p>
      <el-button type="primary" :icon="Edit" style="margin-left: 20px;" circle />
    </div>
  </div>
  
  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">用户类型</p>
    <p style="display: inline;">{{ userclass }}</p>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">用户ID</p>
    <p style="display: inline;">{{ nickname }}</p>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">性别</p>
    <p style="display: inline;">  
  <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio></p>
  <el-button size="mini" style="margin-left: 40px;" round>确定</el-button>
  <el-button size="mini" round>取消</el-button>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">年龄</p>
    <p style="display: inline;">{{ age }}</p>
  </div>
  
  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">电话</p>
    <p style="display: inline;">{{ telephone }}</p>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">邮箱</p>
    <p style="display: inline;">{{ email }}</p>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">职业</p>
    <p style="display: inline;">{{ occupation }}</p>
  </div>

  <div style="display: flex; align-items: center;">
    <p style="display: inline; margin-right: 20px;">应用场景</p>
    <p style="display: inline;">{{  }}</p>
  </div>
</el-card>



  </template>
  
  <script>
  import { ref } from 'vue'
  import {Edit} from '@element-plus/icons-vue'
const input = ref('')
  export default {
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        username: "like",
        nickname: "hiten",
        registrationTime: "2024-02-27" ,
        userclass:"普通用户",
        radio:"1",
        age:"20",
        telephone:"11111",
        email:"2581562356@qq.com",
        occupation:"老师"
      };
    }
  };
  </script>
  
  <style scoped>
 
  .welcome {
    font-size: 30px;
    padding-left: 30px;
  }
  .main_left{
float: left;
  }
  
.main_right{
margin-left: 150px; 
padding-top: 1px;
font-size: 40px;
}
.main_right_nickname{
    padding-left: 50px;
}
.registration-time {
  width: 300px; 
  height: 50px; 
  background: linear-gradient(to right, #4E9AFF, #F987F7); 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 30px; /* 圆角的大�? */
  letter-spacing: 2px;
}

  </style>
  