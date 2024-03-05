import request from "@/utils/request";
import {Data} from "./type"

enum API{
    request_uer_internet="",
    add_internet="",
    change_internet="",
    delete_internet="",
}

export const requserinternet=()=>{
  request.get<any,any>(API.request_uer_internet)
}

export const addinternet=()=>{
    request.get<any,any>(API.add_internet)
  }

  export const changeinternet=()=>{
    request.get<any,any>(API.change_internet)
  }

  export const deleteinternet=()=>{
    request.get<any,any>(API.delete_internet)
  }

