import {AxiosError, AxiosHeaders, AxiosRequestConfig, HeadersDefaults} from 'axios'
export interface HttpRequestType extends AxiosRequestConfig {
  showActual?: boolean
  overrideHeaders?: boolean
}

export type HttpRequestHeader = AxiosHeaders | string | string[] | number | boolean | null

export interface HttpRequestDefaultHeader extends HeadersDefaults {
  Authorization?: string
  Accept?: 'application/json'
  'Content-Type'?: 'application/json'
  'Access-Control-Allow-Origin': '*'
}

export type HttpRequestGenericError = AxiosError
