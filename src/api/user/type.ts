// // 登录接口需要携带的参数类型
// export interface loginFrom {
//   username: string;
//   password: string;
//   // 其他可能需要的参数
// }

// interface dataType {
//   token?: string;
//   message?: string;
// }
// // 登录接口可能方辉的数据类型
// export interface loginResponseData {
//   code: number;
//   data: dataType;
// }

// interface user {
//   checkUser: userInfo;
// }

// interface userInfo {
//   userId: number;
//   avatar: string;
//   username: string;
//   password: string;
//   desc: string;
//   roles: string[];
//   buttons: string[];
//   routes: string[];
//   token: string;
// }

// // 服务器返回用户信息的相关数据类型
// export interface userResponseData {
//   code: number;
//   data: user;
// }

//-----------上面的为mock接口类型-------------

// 定义用户ts类型
// 用户登录接口携带参数的用户类型

export interface loginFormData {
  username: string;
  password: string;
}

export interface registerFormData{
  username: string;
  password: string;
}

export interface changeFormData{
  username: string;
  password: string;
}

// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
  code?: number | null;
    data?: { [key: string]: any };
    message?: null | string;
    
}



// 定义登录接口返回类型
export interface loginResponseData extends ResponseData {
  
}
// 定义登录接口返回类型
export interface registerResponseData extends ResponseData{

}

// 定义获取用户信息返回类型
export interface userInfoResponseData extends ResponseData {
  data: {
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
  };
}

export type userlist=userInfoResponseData[];

//获取用户列表
export interface userInfoResponselist extends ResponseData{
  data:userlist;
}

//获取用户数量
export interface userNumber extends ResponseData{
  usernumber:number;
}

//定义用户info的请求数据
export interface Requestuserinfo {
  Authorization: string;
  [property: string]: any;
}
