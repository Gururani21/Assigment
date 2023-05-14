declare module JobInfoTypes {
  interface SalaryType {
    min: Number
    max: Number
  }

  interface JobinfoData {
    createdAt?: number
    title: string
    companyName: string
    industry: string
    location: string
    remoteType: string
    experienceMin: number
    salaryMin: number
    totalEmployee: string
    applyType: string
    companyLogo: string
    salaryMax: number
    experienceMax: number
    id: string
  }

  interface stepOne {
    title: string
    companyName: string
    industry: string
    location: string
    remoteType: string
  }
  interface stepTwo {
    experienceMin: number
    salaryMin: number
    totalEmployee: string
    applyType: string
    salaryMax: number
    experienceMax: number
  }
}
