import {InputProps} from './Input'

const Input: React.FC<InputProps> = ({label, error, containerClassName, inputClassName, ...props}) => {
  const baseContainerClasses = 'flex flex-col space-y-1 '
  const baseInputClasses =
    'px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out placeholder-grey'

  const containerClasses = `${baseContainerClasses} ${containerClassName}`
  const inputClasses = `${baseInputClasses} ${inputClassName} `

  const requiredSymbol = () => {
    return <span className="text-error">*</span>
  }

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={props.id}>
          {label} {props?.required && requiredSymbol()}{' '}
        </label>
      )}
      <input {...props} className={inputClasses} />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  )
}

export default Input
