// 创建用户相关的小仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin, reqUserInfo } from "@/api/user";
// 引入数据类型
import type { loginFrom } from "@/api/user/type";
import type { loginResponseData } from "@/api/user/type";
import type { UserState } from "@/store/modules/types/type";
// 引入本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
// 引入常量路由
import { constantRoutes } from "@/router/routes";

let useUserStore = defineStore("User", {
  // 创建用户小仓库
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户的唯一标识
      menuRoutes: constantRoutes, // 仓库生成菜单需要的数组（路由）
      username: "", //用户姓名
      avatar: "", //用户头像
    };
  },
  //   发送异步逻辑的地方
  actions: {
    // 登录方法
    async userLogin(data: loginFrom) {
      //  登录请求
      let result: loginResponseData = await reqLogin(data);
      // 登陆成功200 ->
      // 登陆失败:201 提示错误信息
      if (result.code === 200) {
        //由于pinia存储数据利用的是js对象
        console.log(result.data.token);
        // 本地存储持久化
        SET_TOKEN(result.data.token as string);
        // 返回一个成功的primise
        return "ok";
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
    // 获取用户信息方法
    async userInfo() {
      // 获取存储到仓库中
      let result = await reqUserInfo();
      if (result.code === 200) {
        this.username = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
        return "ok";
      } else {
        return Promise.reject("获取用户信息失败");
      }
    },
    // 退出登陆的方法
    userLogout() {
      // 清除本地存储
      this.token = "";
      this.username = "";
      this.avatar = "";
      REMOVE_TOKEN();
    },
  },
  //   获取状态的地方
  getters: {},
});

// 对外暴露用户仓库
export default useUserStore;
