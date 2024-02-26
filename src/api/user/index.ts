// 统一管理项目的用户相关接口
import request from "@/utils/request";
import type { loginFrom, loginResponseData, userResponseData } from "./type";

// 统一管理接口
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

// 登录接口方法
export const reqLogin = (data: loginFrom) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL);
