//官方和用户的查询参数
export interface Request {
    " recommendedMemory"?: number;
    imageName?: string;
    imageSystem?: string;
    labelName?: string[];
    pageNum?: number;
    pageSize?: number;
    recommendedCpu?: number;
    recommendedDataDisk?: number;
    recommendedSystemDisk?: number;
    [property: string]: any;
}
export interface Response {
    code: number;
    data: Data[];
    msg: string;
    [property: string]: any;
}

export interface Data {
    imageId?: number;
    imageName?: string;
    imageSystem?: string;
    labelName?: string;
    recommendedCpu?: number;
    recommendedDataDisk?: number;
    recommendedMemory?: number;
    recommendedSystemDisk?: number;
    [property: string]: any;
}