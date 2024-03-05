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

//��ѯ�ٷ�����
export const reqofficalmirror=()=>{
    request.get<any,Response>(API.request_offical_url);
}

//��ѯ�û�����
export const requsermirror=()=>{
    request.get<any,Response>(API.request_user_url);
}
//�Զ��徵���ѯ
export const customreqmirror=()=>{
    request.get<any,Response>(API.request_custom_mirror_url)
}

//�鿴�����ϴ�����
export const reqpersonalmirror=()=>{
    request.get<any,any>(API.request_personal_mirror_url)
}

//����ת����
export const transform=()=>{
    request.post<any,any>(API.mirror_transform_container_url)
}

//admin��������
export const createmirror=()=>{
    request.post<any,any>(API.create_mirror_url);
}

//admin�޸ľ���
export const changemirror=()=>{
    request.post<any,any>(API.change_mirror_url)
}

//adminɾ������
export const deletemirror=()=>{
    request.delete<any,any>(API.delete_mirror_url)
}
//��������ʲô����Ҫ����Щtype��
