import React from 'react'
import ButtonProps from './Button'
const Button: React.FC<ButtonProps> = ({children, className, variant = 'primary', size = 'md', ...props}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg shadow-md focus:outline-none transition duration-150 ease-in-out'

  const variantClasses = {
    primary: 'text-white bg-primary hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800',
    secondary: 'text-primary border bg-white hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300',
  }

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}

export default Button
