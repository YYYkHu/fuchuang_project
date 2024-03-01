<template>
   <div class="layout_container">
        <!-- 左侧菜单-->
    <div class="layout_slider">123</div>
        <!-- 顶部导航-->
    <div class="layout_tabbar">456</div>
        <!-- 内容展示区域-->
    <div class="layout_main">
        
        <el-card class="myuser">
        <el-descriptions title="用户信息" direction="horizontal" :column="1" >
            
  <el-descriptions-item label="用户名">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="用户类型">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="认证状态">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="性别">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="年龄">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="职业">kooriookami
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  <el-descriptions-item label="场景需求">
    <el-tag size="small">学习</el-tag>
    <el-button type="primary">修改</el-button>
  </el-descriptions-item>
  
</el-descriptions>
        </el-card>
    <el-card style="margin: 10px 0px;">
        <el-descriptions title="账户安全" direction="horizontal" :column="1" >
         <el-descriptions-item label="手机号">17307463723
          <el-button type="primary">修改</el-button>
         </el-descriptions-item>
</el-descriptions>
    </el-card>
    <el-card style="margin: 10px 0px;">
        <el-descriptions title="第三方账户" direction="horizontal" :column="1" >
         <el-descriptions-item label="QQ">2581562356
          <el-button type="primary">修改</el-button>
         </el-descriptions-item>
         <el-descriptions-item label="微信">2581562356
          <el-button type="primary">修改</el-button>
         </el-descriptions-item>
</el-descriptions>
    </el-card>
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout_container{
    width: 100%;
    height: 100vh;
    
}
  .layout_slider{
    width: 260px;
    height: 100vh;
    background: rgb(1, 6, 7);
}
 .layout_tabbar{
    position: fixed;
    width: calc(100% - 260px);
    height: 50px;
    background: rgb(3, 212, 254);
    top:0px;
    left: 260px;

}
 .layout_main{
    position: absolute;
    width: calc(100% - 260px); 
    height: calc(100vh - 50px);
    background: rgb(236, 236, 236,0.5);
    left:268px ;
    top: 57px;
    padding: 20px;
    overflow: auto;
}
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
   background: rgb(62, 182, 212);;
}
.myuser{
    display: flex;
    align-items: center;
}

</style>
