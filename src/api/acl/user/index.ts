// 用户管理api
import request from "../../../utils/request";
import { UserResponseData, User } from "./type";

enum API {

  //拿到所有的用户信息列表
  ALLURERS_URL = "/user/userList",
  // 删除
  DELETE_URL = "",
  // 添加用户信息
  ADDUSER_URL = "",
  // 更新用户信息
  UPDATEUSER_URL = "",
}

// 获取用户账户信息
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserResponseData>(API.ALLURERS_URL + `${page}/${limit}`);

// 删除
export const reqDeleteUser = (id: number) =>
  request.delete<any, any>(API.DELETE_URL + id);

// 添加
export const reqAddUpdateUser = (data: User) => {
  // 判断是跟新还是添加
  if (data.userId) {
    return request.put<any, User>(API.UPDATEUSER_URL, data);
  } else {
    return request.post<any, User>(API.ADDUSER_URL, data);
  }
};
