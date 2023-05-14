import {InputHTMLAttributes} from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  containerClassName?: string
  inputClassName?: string
  name: string
}

export {InputProps}
