// ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 一个账户信息的ts类型
export interface User {
  userId:number;
  username:string;
  password:string;
  userHead?:string|null;
  email?:string|null;
  phone?:number|null;
  sex?:string|null;
  age?:number|null;
  occupationId?:number|null;
  roleId?:number|null;
  createTime?: string|null;
  updateTime?: string|null;
  numberOfDesktops?:number|null;
}

export type Records = User[];
// 全部的用户信息
export interface UserResponseData extends ResponseData {
  data: {
    records: Records;
    
  };
}
export interface Usernumber extends ResponseData{
  Usernum:number;
}


export interface User_info_change_response {
  email?: null | string;
  name?: null | string;
  occupationId?: null | string;
  phone?: null | string;
  roleId?: null | string;
  
}

/**
 * UserInfoDTO
 */
export interface User_info_change_Request {
  email?: string;
  name?: string;
  occupationId?: string;
  phone?: string;
  roleId?: string;
  username: string;
  
  
}