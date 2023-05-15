import React, {Ref} from 'react'
import {Form, Formik} from 'formik'

import * as Yup from 'yup'
import Input from '../../../../lib/components/Form/Input'
import Button from '../../../../lib/components/Button'
interface StepOneProps {
  handelNext: (val: JobInfoTypes.stepOne) => void
  currentFormData: JobInfoTypes.JobinfoData | null
}
export const StepOne = ({handelNext, currentFormData}: StepOneProps) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Job Title is required.').max(100),
    companyName: Yup.string().required('Company Name is required.'),
    industry: Yup.string().required('Industry Name is required.'),
    location: Yup.string(),
    remoteType: Yup.string().oneOf(['Remote', 'In-Office']).required(),
  })

  const initialValues = {
    title: currentFormData ? currentFormData.title : '',
    companyName: currentFormData ? currentFormData.companyName : '',
    industry: currentFormData ? currentFormData.industry : '',
    location: currentFormData ? currentFormData.location : '',
    remoteType: currentFormData ? currentFormData.remoteType : '',
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{...initialValues}}
      validationSchema={validationSchema}
      onSubmit={(value) => {
    
        handelNext(value)
      }}
    >
      {(formik) => (
        <Form className="grid gap-6">
          <Input label="Title" name="title" required placeholder="ex. UX UI Designer" />
          <Input label="Company name" name="companyName" required placeholder="ex. Google" />
          <Input label="Industry" name="industry" required placeholder="ex. Information Technology " />
          <div className="grid grid-cols-2 gap-8">
            <Input label="Location" name="location" placeholder="ex. Chennai" />
            <Input label="Remote type" name="remoteType" placeholder="ex. In-office" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Next</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
