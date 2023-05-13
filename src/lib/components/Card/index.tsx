import React from 'react'
import {CardProps} from './Card'
import img from '../../../assets/jobimg.svg'
import Button from '../Button'
import Typography from '../Typography'
const Card = () => {
  return (
    <div className="bg-white rounded-xl px-6 py-4 pr-4 ">
      <div className="flex gap-4 items-start ">
        <img src={`${img}`} alt="Company Logo" />

        <div className="flex-1">
          <div className="flex">
            <div className="">
              <Typography variant="heading">UX UI Designer</Typography>

              <Typography variant="body">Great Vibes - Information Technology</Typography>
              <Typography variant="body" className="text-grey">
                Chennai, Tamilnadu, India (In-office)
              </Typography>
            </div>
            <div className="flex justify-end ml-auto h-10 gap-4 ">
              <Button>Edit</Button>
              <Button className="bg-red-500">Delete</Button>
            </div>
          </div>

          <div className="mt-8">
            <Typography variant="body">Part-Time (9.00 am - 5.00 pm IST)</Typography>
            <Typography variant="body">Experience (1 - 2 years)</Typography>
            <Typography variant="body">INR (₹) 30,000 - 60,000 / Month</Typography>
            <Typography variant="body">51-200 employees</Typography>
          </div>

          <Button className="mt-4">Apply Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
