import React from 'react'
import Card from '../../lib/components/Card'

interface ShowCardsProps {}

const ShowCards: React.FC<ShowCardsProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default ShowCards
