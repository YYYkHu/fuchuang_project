import request from "@/utils/request";
import {data} from "./type"

enum API{
    user_log="",
    admin_log="",
}

export const requserlog=()=>{
    request.get<any,any>(API.user_log);
}

export const reqadminlog=()=>{
    request.get<any,any>(API.admin_log);
}