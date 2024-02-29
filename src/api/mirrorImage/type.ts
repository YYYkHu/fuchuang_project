export interface loginFormData {
  username: string;
  password: string;
}

// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 定义登录接口返回类型
export interface loginResponseData extends ResponseData {
  data: string;
}

// 定义获取用户信息返回类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routers: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}
