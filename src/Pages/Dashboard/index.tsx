import React from 'react'
import Button from '../../lib/components/Button'
import ShowCards from './ShowCards'
import Modal from '../../lib/components/Modal'
import CreateJobForm from './CreateJobForm'

function Dashboard() {
  return (
    <div className="px-10 py-2">
      <div className="flex justify-end my-2">
        <Button>Add</Button>
      </div>

      <ShowCards />

      <Modal isOpen={true} onClose={() => {}}>
        <CreateJobForm />
      </Modal>
    </div>
  )
}

export default Dashboard
