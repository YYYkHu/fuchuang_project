import request from "@/utils/request";
import {Request,Response}from './type'

enum API{
  request_offical_url=" ",
  request_user_url=" ",
  delete_mirror_url="",
  change_mirror_url="",
  create_mirror_url="",
  request_custom_mirror_url="",
  mirror_transform_container_url="",
  request_personal_mirror_url="",
}

//查询官方镜像
export const reqofficalmirror=()=>{
    request.get<any,Response>(API.request_offical_url);
}

//查询用户镜像
export const requsermirror=()=>{
    request.get<any,Response>(API.request_user_url);
}
//自定义镜像查询
export const customreqmirror=()=>{
    request.get<any,Response>(API.request_custom_mirror_url)
}

//查看个人上传镜像
export const reqpersonalmirror=()=>{
    request.get<any,any>(API.request_personal_mirror_url)
}

//镜像转容器
export const transform=()=>{
    request.post<any,any>(API.mirror_transform_container_url)
}

//admin制作镜像
export const createmirror=()=>{
    request.post<any,any>(API.create_mirror_url);
}

//admin修改镜像
export const changemirror=()=>{
    request.post<any,any>(API.change_mirror_url)
}

//admin删除镜像
export const deletemirror=()=>{
    request.delete<any,any>(API.delete_mirror_url)
}
//传参是是什么，还要补哪些type？
