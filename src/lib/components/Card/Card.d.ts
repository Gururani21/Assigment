interface CardProps {
  cardData: JobInfoTypes.JobinfoData
  className?: string
  handelCardDelete: () => void
  handelEdit: (val: JobInfoTypes.JobinfoData) => void
}

export {CardProps}
