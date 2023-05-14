import {AxiosResponse} from 'axios'
import HttpRequest from '../common/helpers/HttpRequest'
import {HttpRequestType} from '../common/helpers/HttpRequest/types'
import ServiceConfig from '../common/helpers/utils/ServiceConfig'
const savedata = (data: JobInfoTypes.JobinfoData): Promise<AxiosResponse<JobInfoTypes.JobinfoData>> => {
  const requestOptions: HttpRequestType = {
    url: data.id === 'new' ? ServiceConfig.jobinfoEndoPoint : ServiceConfig.jobinfoEndoPoint + `/${data.id}`,
    data,
    method: data.id === 'new' ? 'POST' : 'PUT',
  }

  return HttpRequest(requestOptions)
}

const getJobData = (): Promise<AxiosResponse<JobInfoTypes.JobinfoData[]>> => {
  const requestOptions: HttpRequestType = {
    url: ServiceConfig.jobinfoEndoPoint,
    method: 'GET',
  }

  return HttpRequest(requestOptions)
}
const deleteJob = (id:string): Promise<AxiosResponse<JobInfoTypes.JobinfoData[]>>=>{
    const requestOptions: HttpRequestType = {
        url: ServiceConfig.jobinfoEndoPoint+`/${id}`,
        method: 'DELETE',
      }
    
      return HttpRequest(requestOptions)
}

export const jobService = {
  savedata,
  getJobData,
  deleteJob
}
