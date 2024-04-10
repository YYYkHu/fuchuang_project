
export interface Response {
    code: number;
    msg: string;
}

export type Records = responseData[];

export interface responseData {
    imageId?: number;
    imageName?: string;
    userId:number;
    imageRemark:string;
    imageSystem?: string;
    labelName?: string[];
    recommendedId:number;
    recommendedCpu?: number;
    recommendedDataDisk?: number;
    recommendedMemory?: number;
    imageIntroduce:string;

   
   
}

export interface offical_responsedata extends Response{
    data:{
        total:number;
        records:Records;
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