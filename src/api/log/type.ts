export interface Request {
    LogTypeName?: string;
    [property: string]: any;
}

export interface Response {
    code: number;
    data: any[];
    msg: string;
    [property: string]: any;
}
export interface data{
    
}