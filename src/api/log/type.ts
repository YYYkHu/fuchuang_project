export interface UserRequest {
    LogTypeName?: string;
    [property: string]: any;
}

export interface UserResponsedata extends ResponseData{
    data: LogData;
}


export interface ResponseData {
    code: number;
    message: string;
  }

export interface AdminResponsedata extends ResponseData{
    data: {
        total:number;
        rows: Records;
        
      };
}

export type Records = LogData[];

export interface LogData{
    localTime: string;
    
    logContent: string;
    logId: number;
    logTypeName: string;
    userName:string;
}
