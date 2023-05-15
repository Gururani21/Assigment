import React from 'react'
import {CardProps} from './Card'
import img from '../../../assets/jobimg.svg'
import Button from '../Button'
import Typography from '../Typography'
import {jobService} from '../../../app/services/JobinfoService'
import {toast} from 'react-hot-toast'

const Card = ({cardData, handelCardDelete, handelEdit}: CardProps) => {
  const handelDelete = () => {
    jobService.deleteJob(cardData.id).then(() => {
      console.log('job Deleted Successfully ')
      toast.success('Data Deleted Successfully')
      handelCardDelete()
    })
  }

  return (
    <div className="bg-white rounded-xl px-6 py-4 pr-4 ">
      <div className="flex gap-4 items-start ">
        <img src={`${img}`} alt="Company Logo" />

        <div className="flex-1">
          <div className="flex">
            <div className="grid gap-1">
              <Typography variant="heading">{cardData.title}</Typography>

              <Typography variant="body">{cardData.companyName} - {cardData.industry}</Typography>
              <Typography variant="body" className="text-grey">
                {cardData.location} ({cardData.remoteType})
              </Typography>
            </div>
            <div className="flex justify-end ml-auto h-10 gap-4 ">
              <Button onClick={() => handelEdit(cardData)}>Edit</Button>
              <Button className="bg-red-500 hover:bg-red-600" onClick={handelDelete}>
                Delete
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-2">
            <Typography variant="body">Part-Time (9.00 am - 5.00 pm IST)</Typography>
            <Typography variant="body">
              Experience ({cardData.experienceMin} - {cardData.experienceMax} years)
            </Typography>
            <Typography variant="body">
              INR (₹) {cardData.salaryMin}- {cardData.salaryMax} / Month
            </Typography>
            <Typography variant="body">{ (Math.floor( Number(cardData.totalEmployee)- Number(cardData.totalEmployee)/10)) } - {cardData.totalEmployee} Employees</Typography>
          </div>

          <Button className="mt-4">Apply Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
