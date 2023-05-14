import React from 'react'
import Card from '../../lib/components/Card'

interface ShowCardsProps {
  jobData: JobInfoTypes.JobinfoData[]
  handelCardDelete: () => void,
  handelEdit: (val: JobInfoTypes.JobinfoData) => void
}

const ShowCards: React.FC<ShowCardsProps> = ({jobData, handelCardDelete, handelEdit}: ShowCardsProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {jobData.map((data) => (
        <Card cardData={data} handelCardDelete={handelCardDelete} handelEdit={handelEdit}/>
      ))}
    </div>
  )
}

export default ShowCards
