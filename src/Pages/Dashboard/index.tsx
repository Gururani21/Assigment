import React, {useState, useEffect} from 'react'
import Button from '../../lib/components/Button'
import ShowCards from './ShowCards'
import Modal from '../../lib/components/Modal'
import CreateJobForm from './CreateJobForm'
import {jobService} from '../../app/services/JobinfoService'
import Loader from '../../lib/components/Loader'
let currentFormData:null|JobInfoTypes.JobinfoData =null; 
function Dashboard() {
  const [isModal, setIsModal] = useState(false)
  const [jobData, setJobData] = useState<JobInfoTypes.JobinfoData[]>([])
  const [isDelete , setIsDelete]= useState(false)
const [isLoading, setIsLoading] = useState(true)
  const handelCloseModal = () => {
    setIsModal(false)
  }
  const handelOpenModal = () => {
    setIsModal(true)
  }
  const getJobData = () => {
    setIsLoading(true)
    jobService.getJobData().then((res) => {
      setIsLoading(false)
      console.log(res)
      setJobData(res.data)
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  const handelCardDelete = ()=>{
    console.log("first")
    setIsDelete(!isDelete)
  }
  const handelEdit= (val:JobInfoTypes.JobinfoData)=>{
    console.log("here", val)
    currentFormData =val;
    setIsModal(true)

  }

  useEffect(() => {
    getJobData()
  }, [isDelete])

  return (
    <div className="px-10 py-2">
      <div className="flex justify-end my-2">
        <Button onClick={handelOpenModal}>Add</Button>
      </div>
     {isLoading? <Loader/>:    <ShowCards jobData={jobData}  handelCardDelete={handelCardDelete} handelEdit={handelEdit}/>}
   

      <Modal isOpen={isModal} onClose={handelCloseModal}>
        <CreateJobForm handelCloseModal={handelCloseModal}  currentFormData={currentFormData} getJobData={getJobData}/>
      </Modal>
    </div>
  )
}

export default Dashboard
