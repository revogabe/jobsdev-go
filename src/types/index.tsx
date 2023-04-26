export type TJobs = {
  ID: number
  Title: string
  Description: string
  Role: string
  Company: string
  Location?: string
  Remote: boolean
  Experience?: string
  Salary?: string
  Link?: string
  Approved?: boolean
}

export type TJobsResponse = {
  data: TJobs[]
}

export type TJobsResponseUnique = {
  data: {
    ID: number
    Title: string
    Description: string
    Role: string
    Company: string
    Location?: string
    Remote: boolean
    Experience?: string
    Salary?: string
    Link?: string
    Approved?: boolean
  }
}
