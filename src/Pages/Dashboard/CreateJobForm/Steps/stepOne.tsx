import React, { Ref } from 'react'
import {Form, Formik} from 'formik'

import * as Yup from 'yup'
import Input from '../../../../lib/components/Form/Input'
export const StepOne =  React.forwardRef((props, ref : Ref<HTMLFormElement>) => {
  const validationSchema = Yup.object({
    // email: Yup.string().required('Email address is required.').email('Must be a valid email.').max(100),
    // password: Yup.string().required('Password is required'),
  })

  const handleSubmit = () => {
    console.log('Form submitted');
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(value) => {
        console.log(value)
      }}
    > 
      {(formik) => (
        <Form className="grid gap-6" ref={ref} onSubmit={handleSubmit}  >
          <Input label="Title" name="title" required />
          <Input label="Company name" name="companyName" required />
          <Input label="Industry" name="industry" required />
          <div className="grid grid-cols-2 gap-8">
            <Input label="Location" name="location" />
            <Input label="Remote type" name="remoteType" />
          </div>
          <button className='hidden' type='submit'></button>
        </Form>
      )}
    </Formik>
  )
})
