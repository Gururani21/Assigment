import Axios, {AxiosInstance, AxiosResponse} from 'axios'
import {toast} from 'react-hot-toast'
import Appconfig from '../utils/AppConfig'
import {HttpRequestGenericError, HttpRequestType} from './types'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const api: AxiosInstance = Axios.create({headers: defaultHeaders})

const showErrorToast = (msg = Appconfig.DEFAULT_SERVER_ERROR) => {
  toast.error(msg)
}

const handleHttpErrors = (error: HttpRequestGenericError, showActual: boolean) => {
  const errorData: unknown = error.response?.data
  const data = errorData
  switch (error.response?.status) {
    case 0: {
      break
    }
    case 401:
    case 403:
    case 451:
    case 203:
    case 412: {
      // redirect for auth
      break
    }
    case 400: {
      //showErrorToast(data.data[0].message)
      break
    }
    case 404:
    case 500: {
      //showErrorToast(data.data[0].message ?? error.message)
      break
    }
    default: {
      showErrorToast()
    }
  }
}

const HttpRequest = async ({method = 'GET', showActual = false, ...config}: HttpRequestType): Promise<AxiosResponse<any, any>> => {
  const token = process.env.REACT_APP_API_TOKEN
  const authToken = `Bearer ${token}`

  if (authToken) {
    api.defaults.headers['Authorization'] = authToken
  } else {
    delete api.defaults.headers['Authorization']
  }

  if (config.url) {
    try {
      const response = await api({
        method,
        ...config,
      })
      return Promise.resolve(response)
    } catch (error) {
      const errors = error as HttpRequestGenericError

      if (errors.response?.data && !showActual) {
        handleHttpErrors(errors, showActual)
      }
      return Promise.reject(errors)
    }
  }
  return Promise.reject({message: 'API URL is not defined'})
}

export default HttpRequest
