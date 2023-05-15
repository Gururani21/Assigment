import React from 'react'
import {Field, Form, Formik} from 'formik'

import * as Yup from 'yup'
import Input from '../../../../lib/components/Form/Input'
import Button from '../../../../lib/components/Button'
interface StepTwoProps {
  handelSave: (val: JobInfoTypes.stepTwo) => void
  currentFormData: JobInfoTypes.JobinfoData | null
}
export const StepTwo = ({handelSave, currentFormData}: StepTwoProps) => {
  const validationSchema = Yup.object({
    experienceMin: Yup.number().min(0),
    experienceMax: Yup.number().min(0).max(25),
    salaryMin: Yup.number().min(0),
    salaryMax: Yup.number().max(1200000),
    totalEmployee: Yup.number(),
    applyType: Yup.string().oneOf(['Quick apply', 'External apply']).required(),
  })
  return (
    <Formik
      enableReinitialize
      initialValues={{
        experienceMin: currentFormData?.experienceMax || 0,
        salaryMin: currentFormData?.salaryMin || 0,
        totalEmployee: currentFormData?.totalEmployee || '0',
        applyType: currentFormData?.applyType || 'Quick apply',

        salaryMax: currentFormData?.salaryMax || 0,
        experienceMax: currentFormData?.experienceMax || 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(value: JobInfoTypes.stepTwo) => {
        console.log(value)
        handelSave(value)
        // handelNext(value)
      }}
    >
      {({values}) => (
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
          <div role="group" aria-labelledby="my-radio-group" className="flex gap-8">
            <label>
              <Field type="radio" name="applyType" value="Quick apply" className="me-2" />
              Quick apply
            </label>
            <label>
              <Field type="radio" name="applyType" value="External apply" className="me-2" />
              External apply
            </label>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
