import React from 'react'
import {Form, Formik} from 'formik'

import * as Yup from 'yup'
import Input from '../../../../lib/components/Form/Input'
import Button from '../../../../lib/components/Button'
interface StepTwoProps {
  handelSave: (val: JobInfoTypes.stepTwo) => void,currentFormData: JobInfoTypes.JobinfoData | null
}
export const StepTwo = ({handelSave,currentFormData}: StepTwoProps) => {
  const validationSchema = Yup.object({
    experienceMin:Yup.number().min(0),
    experienceMax:Yup.number().min(0).max(25),
    salaryMin: Yup.number().min(0),
    salaryMax: Yup.number().max(1200000),
    totalEmployee:Yup.number()
    

  })
  return (
    <Formik
      enableReinitialize
      initialValues={{
        experienceMin: currentFormData?.experienceMax || 0,
        salaryMin: currentFormData?.salaryMin||0,
        totalEmployee: currentFormData?.totalEmployee||"0",
        applyType: currentFormData?.applyType||'',

        salaryMax:currentFormData?.salaryMax|| 0,
        experienceMax: currentFormData?.experienceMax|| 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(value: JobInfoTypes.stepTwo) => {
        console.log(value)
        handelSave(value)
        // handelNext(value)
      }}
    >
      {(formik) => (
        <Form className="grid gap-6">
          <div className="grid grid-cols-2 items-end gap-8">
            <Input name="experienceMin" label="Experience" />
            <Input name="experienceMax" />
          </div>
          <div className="grid grid-cols-2 items-end gap-8">
            <Input name="salaryMin" label="Salary" />
            <Input name="salaryMax" />
          </div>
          <Input name="totalEmployee" label="Total employee" />

          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
