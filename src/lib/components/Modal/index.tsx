import React, {useState} from 'react'
import ModalProps from './Modal'

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, size = 'md'}) => {
  const [modalClasses, setModalClasses] = useState<string>()

  const handleOpen = () => {
    setModalClasses('fixed inset-0 z-10 overflow-y-auto')
  }

  const handleClose = () => {
    setModalClasses('hidden')
    onClose()
  }
  let widthClasses = ''

  switch (size) {
    case 'sm':
      widthClasses = 'w-64'
      break
    case 'md':
      widthClasses = 'w-3/4'
      break
    case 'lg':
      widthClasses = 'w-128'
      break
    case 'xl':
      widthClasses = 'w-192'
      break
    default:
      widthClasses = 'w-96'
      break
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-0 bg-gray-900 bg-opacity-50">
          <div className={`${modalClasses}`}>
            <div className="flex items-center justify-center min-h-screen">
              <div className={`bg-white rounded-xl shadow-md ${widthClasses} `}>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
