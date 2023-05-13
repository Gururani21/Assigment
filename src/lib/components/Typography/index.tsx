import {TypographyProps} from './Typography'

const Typography: React.FC<TypographyProps> = ({variant = 'body', className, children}) => {
  let classes = 'font-medium leading-5'

  switch (variant) {
    case 'heading':
      classes += ' text-xl '
      break
    case 'subheading':
      classes += ' text-lg'
      break
    case 'body':
      classes += ' text-base'
      break
    case 'caption':
      classes += ' text-sm'
      break
    default:
      break
  }

  return <p className={`${classes} ${className}  `}>{children}</p>
}

export default Typography
