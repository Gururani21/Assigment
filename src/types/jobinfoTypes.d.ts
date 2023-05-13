declare module JobInfoTypes {
  interface SalaryType {
    min: Number
    max: Number
  }

  interface JobinfoData {
    createdAt: number
    title: string
    companyName: string
    industry: string
    location: string
    remoteType: string
    experience: string
    Salary: SalaryType
    totalEmployee: string
    applyType: string
    companyLogo: string
    id: string
  }
}
