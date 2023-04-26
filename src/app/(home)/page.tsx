import { CardJobs } from '@/components/CardJobs'
import { GoLogo } from '@/components/GoLogo'
import { TJobsResponse } from '@/types'

export default async function Home() {
  const response = await fetch(
    'https://jobsdevgo.up.railway.app/api/v1/jobsall',
    {
      cache: 'no-store',
      next: {
        revalidate: 60,
      },
    },
  )
  const { data } = (await response.json()) as TJobsResponse
  const Approved = data.filter((job) => job.Approved)

  return (
    <main className="flex min-h-screen flex-col gap-12 px-4 items-start justify-start py-4 container">
      <div className="relative w-full rounded-xl flex items-center justify-between gap-8 h-64 sm:h-96">
        <h1 className="text-7xl max-sm:text-6xl max-w-2xl font-bold text-emerald-500">
          Encontre sua vaga agora mesmo!
        </h1>
        <div className="xl:flex hidden ">
          <div>
            <GoLogo bg="bg-emerald-600" title="LETS" />
          </div>
          <div className="-ml-12">
            <GoLogo bg="bg-emerald-500" title="GO" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
        {Approved.map(({ ID, Title, Description, Role, Company, Remote }) => (
          <CardJobs
            key={ID}
            ID={ID}
            Title={Title}
            Description={Description}
            Role={Role}
            Company={Company}
            Remote={Remote}
            Owner={false}
          />
        ))}
      </div>
    </main>
  )
}
