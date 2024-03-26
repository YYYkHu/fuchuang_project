
export interface Response {
    code: number;
    msg: string;
}

export type Records = responseData[];

export interface responseData {
    imageId?: number;
    imageName?: string;
    imageSystem?: string;
    labelName?: string;
    recommendedCpu?: number;
    recommendedDataDisk?: number;
    recommendedMemory?: number;
    recommendedSystemDisk?: number;
   
}

export interface offical_responsedata extends Response{
    data:{
        records:Records
    }
}

export interface user_responsedata extends Response{
    data:{
        records:Records
    }
}

// export interface Reqmirror {
//     " recommendedMemory"?: number;
//     imageName?: string;
//     imageSystem?: string;
//     labelName?: string[];
//     pageNum?: number;
//     pageSize?: number;
//     recommendedCpu?: number;
//     recommendedDataDisk?: number;
//     recommendedSystemDisk?: number;
//     [property: string]: any;
// }