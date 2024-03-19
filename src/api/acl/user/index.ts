// 用户管理api
import request from "../../../utils/request";
import type{ UserResponseData, User,Usernumber,ResponseData,User_info_change_response,User_info_change_Request} from "./type";

enum API {

  //拿到所有的用户信息列表
  ALLURERS_URL = "http://pllysun.top:9527/user/userList",
  //获得用户数量
  ALLUSER_NUMBER_URL="http://pllysun.top:9527/user/userCount",
  // 删除
  DELETE_URL = "",
  // 添加用户信息
  ADDUSER_URL = "http://pllysun.top:9527/user/register",
  // 更新用户信息
  UPDATEUSER_URL = "http://pllysun.top:9527/user/userInfo",
}

// 获取用户账户信息
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserResponseData>(API.ALLURERS_URL + `/?page=${page}&limit=${limit}`);

//获得用户数量
export const reqUsernumber = () =>
  request.get<any, Usernumber>(API.ALLUSER_NUMBER_URL);

// 删除
export const reqDeleteUser = (id: number) =>
  request.delete<any, any>(API.DELETE_URL + id);

// 添加
export const reqAddUpdateUser = (data: User) => {
     request.post<any, ResponseData>(API.ADDUSER_URL, data);
};

//更新
export const reqchangeUserinfo = (data:User_info_change_Request) => {
  request.post<any, User_info_change_response>(API.ADDUSER_URL, data);
};
