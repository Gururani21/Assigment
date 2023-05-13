import React, {useState, useRef} from 'react'
import Input from '../../../lib/components/Form/Input'
import Typography from '../../../lib/components/Typography'
import {StepOne} from './Steps/stepOne'
import {StepTwo} from './Steps/steptwo'
import Button from '../../../lib/components/Button'

const CreateJobForm = () => {
  const [step, setStep] = useState('First')
  const stepOneRef = useRef<HTMLFormElement> (null)

  return (
    <div className="bg-white grid px-8 ">
      <div className="flex">
        <Typography variant="heading" className="flex-1">
          Create a job
        </Typography>
        <Typography variant="heading">Steps 1</Typography>
      </div>
      <div className="my-4">
        <StepOne  ref={stepOneRef}/>
        <StepTwo />
      </div>
      <div className="flex justify-end">
        <Button onClick={()=>{
          if(stepOneRef){
            console.log(stepOneRef)
            
          }

        }} >Next</Button>
      </div>
    </div>
  )
}

export default CreateJobForm
