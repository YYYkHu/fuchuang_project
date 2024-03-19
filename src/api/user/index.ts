// // 统一管理项目的用户相关接口
// import request from "@/utils/request";
// import type { loginFrom, loginResponseData, userResponseData } from "./type";

// // 统一管理接口
// enum API {
//   LOGIN_URL = "/user/login",
//   USERINFO_URL = "/user/info",
// }

// // 登录接口方法
// export const reqLogin = (data: loginFrom) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data);
// // 获取用户信息接口方法
// export const reqUserInfo = () =>
//   request.get<any, userResponseData>(API.USERINFO_URL);

// ---------------上面为mock接口-----------------

// 统一管理项目的用户相关接口
import request from "@/utils/request";
import type {
  loginFormData,
  loginResponseData,
  registerFormData,
  registerResponseData,
  userInfoResponseData,
  userInfoResponselist,
} from "./type";
// 项目用户请求的地址
enum API {
  LOGIN_URL = "http://pllysun.top:9527/user/login",
  USERINFO_URL = "http://pllysun.top:9527/user/userInfo",
  REGISTER_URL = "http://pllysun.top:9527/user/register",
  LOGOUT_URL = "http://pllysun.top:9527/user/logout",
  USERINFO_LIST_URL="http://pllysun.top:9527/user/userList"
}

// 登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL);
  //获取用户信息列表
export const reqUserInfolist=()=>
  request.get<any,userInfoResponselist>(API.USERINFO_LIST_URL);
// 退出登录`
export const reqLogout = () => request.get<any, any>(API.LOGOUT_URL);
//注册
export const reqRegister = (data: registerFormData) =>
  request.post<any, registerResponseData>(API.REGISTER_URL, data);
//修改用户信息
