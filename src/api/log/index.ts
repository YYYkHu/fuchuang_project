import request from "@/utils/request";
import type {UserRequest,UserResponsedata,AdminResponsedata} from "./type"

enum API{
    user_log="http://pllysun.top:8087/log/list/1",
    admin_log="http://pllysun.top:9527/log/managementList",
}

export const requserlog=(data:UserRequest)=>{
    request.get<any,UserResponsedata>(API.user_log,data);
}

export const reqadminlog = () =>
  request.get<any, AdminResponsedata>(API.admin_log);