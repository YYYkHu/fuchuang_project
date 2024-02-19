// 登录接口需要携带的参数类型
export interface loginFrom {
  username: string;
  password: string;
  // 其他可能需要的参数
}

interface dataType {
  token?: string;
  message?: string;
}
// 登录接口可能方辉的数据类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

interface user {
  checkUser: userInfo;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

// 服务器返回用户信息的相关数据类型
export interface userResponseData {
  code: number;
  data: user;
}
