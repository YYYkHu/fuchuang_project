//镜像管理api
import request from "@/utils/request";
import { UserResponseData } from "./type";

enum API {
  ALLURERS_URL = "/image/official/1/",
}

// 获取用户账户信息
export const reqUserInfo = () =>
  request.get<any, imageResponseData>(API.ALLURERS_URL);