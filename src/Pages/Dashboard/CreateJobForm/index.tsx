import React, {useState} from 'react'

import Typography from '../../../lib/components/Typography'
import {StepOne} from './Steps/stepOne'
import {StepTwo} from './Steps/steptwo'
import Button from '../../../lib/components/Button'
import {jobService} from '../../../app/services/JobinfoService'
import {toast} from 'react-hot-toast'

const initialValues: JobInfoTypes.JobinfoData = {
  title: '',
  companyName: '',
  industry: '',
  location: '',
  remoteType: '',
  experienceMin: 0,
  salaryMin: 0,
  totalEmployee: '0',
  applyType: '',
  companyLogo: '',
  salaryMax: 0,
  experienceMax: 0,
  id: 'new',
}
interface CreateJobFormProps {
  handelCloseModal: () => void
  currentFormData: JobInfoTypes.JobinfoData | null
  getJobData: () => void
}
const CreateJobForm = ({handelCloseModal, currentFormData, getJobData}: CreateJobFormProps) => {
  const [step, setStep] = useState<'Second' | 'First'>('First')
  const [formData, setFormData] = useState<JobInfoTypes.JobinfoData>(currentFormData ? currentFormData : initialValues)
  const handelNext = (val: JobInfoTypes.stepOne) => {
    console.log('her')
    setFormData({...formData, ...val})
    setStep('Second')
  }
  const handelSave = (val: JobInfoTypes.stepTwo) => {
    const data: JobInfoTypes.JobinfoData = {
      ...formData,
      ...val,
    }
    jobService.savedata(data).then((res) => {
      // show toaster
      toast.success('Data Saved Successfully')
      console.log('Data Saved Successfully')
      getJobData()
      handelCloseModal()
    })
  }

  return (
    <div className="bg-white grid px-8 py-2 ">
      <div className="flex my-2">
        <Typography variant="heading" className="flex-1">
          Create a job
        </Typography>
        <Typography variant="heading">Steps {step === 'First' ? 1 : 2}</Typography>
      </div>
      <div className="my-4">
        {step === 'First' && <StepOne handelNext={handelNext} currentFormData={currentFormData} />}
        {step === 'Second' && <StepTwo handelSave={handelSave} currentFormData={currentFormData} />}
      </div>
    </div>
  )
}

export default CreateJobForm
