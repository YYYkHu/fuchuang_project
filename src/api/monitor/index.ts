import request from "@/utils/request";
import {Response,Data}from './type'

enum API{
  request_All_User_Monitor="http://pllysun.top:8089/adminDeskTopUser",
  
}

//查看所有用户的使用中+关机中
export const reqofficalmirror=()=>{
    request.get<any,Response>(API. request_All_User_Monitor);
}


