export interface Response {
    code: number;
    data: Data;
    msg: string;
    
}

export interface Data {
    downDeskTopCount: number;
    useDeskTopCount: number;
    
}