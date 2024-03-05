export interface uerinfo_Response {
    code: number;
    data: Data[];
    msg: string;
    [property: string]: any;
}

export interface Data {
    createTime?: string;
    networkId?: string;
    networkName?: string;
    podCount?: string;
    podSelector?: string;
    userId?: number;
    userIp?: string;
    [property: string]: any;
}

export interface add_internet_Response {
    code: number;
    data: null;
    msg: string;
    [property: string]: any;
}

export interface change_internet_Response {
    code: number;
    data: null;
    msg: string;
    [property: string]: any;
}

export interface delete_internet_Response {
    code: number;
    data: null;
    msg: string;
    [property: string]: any;
}