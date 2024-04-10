import request from "@/utils/request";
import {
    offical_responsedata
    ,user_responsedata
}from './type'

enum API{
  request_offical_url="http://pllysun.top:9527/image/official",
  request_user_url="http://pllysun.top:9527/image/user",
  delete_mirror_url="",
  change_mirror_url="",
  create_mirror_url="",
  request_custom_mirror_url="",
  mirror_transform_container_url="",
  request_personal_mirror_url="",
}

//请求官方镜像
export const reqofficalmirror=()=>
    request.get<any,offical_responsedata>(API.request_offical_url);

// 搜索官方镜像
export const reqOfficialSearchMirror = (reqId: number, keyword: string) =>
request.get<any, offical_responsedata>(API.request_offical_url+ `/${reqId}?imageRemark=${keyword}` );

// 搜索用户镜像
export const reqUserSearchMirror = ( keyword: string) =>
request.get<any, offical_responsedata>(API.request_user_url+ `?imageRemark=${keyword}` );


//请求用户镜像
export const requsermirror=()=>
    request.get<any,user_responsedata>(API.request_user_url);

//自定义镜像查询
export const customreqmirror=()=>
    request.get<any,Response>(API.request_custom_mirror_url)


//请求个人镜像
export const reqpersonalmirror=()=>
    request.get<any,any>(API.request_personal_mirror_url)


//镜像转换为容器
export const transform=()=>
    request.post<any,any>(API.mirror_transform_container_url)


//admin制作新镜像
export const createmirror=()=>
    request.post<any,any>(API.create_mirror_url);


//admin修改镜像
export const changemirror=()=>
    request.post<any,any>(API.change_mirror_url)


//adminɾ删除镜像
export const deletemirror=()=>
    request.delete<any,any>(API.delete_mirror_url)


