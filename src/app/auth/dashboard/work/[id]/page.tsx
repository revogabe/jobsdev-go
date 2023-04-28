import { TJobsResponseUnique } from '@/types'
import { BackpackIcon } from '@radix-ui/react-icons'
import { ButtonApply } from './components/ButtonApply'
import { InfoLabel } from '@/components/InfoLabel'

interface PageProps {
  params: {
    id: string
  }
}

export default async function WorkPage({ params }: PageProps) {
  const response = await fetch(
    `https://jobsdevgo.up.railway.app/api/v1/jobs?id=${params.id}`,
    {
      cache: 'no-cache',
    },
  )
  const { data } = (await response.json()) as TJobsResponseUnique
  const {
    ID,
    Title,
    Description,
    Company,
    Remote,
    Role,
    Experience,
    Salary,
    Link,
    Location,
  } = data

  return (
    <main className="mx-auto min-h-screen w-full px-4 pt-12">
      <div className="flex flex-col gap-8">
        <ButtonApply ID={ID} />
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <h1 className="text-3xl font-bold md:text-5xl">{Title}</h1>
          <div className="flex items-center justify-end gap-3">
            <p className="flex items-center justify-center gap-2 truncate rounded-lg bg-zinc-900 px-6 py-3 text-lg font-bold">
              <BackpackIcon width={24} height={24} /> {Role}
            </p>
            <a
              href={Link}
              className="flex items-center justify-center gap-2 truncate rounded-lg bg-emerald-500 px-6 py-3 text-lg font-bold text-white duration-150 ease-out hover:bg-emerald-800 hover:text-white active:scale-95"
            >
              Aplicar para Vaga
            </a>
          </div>
        </div>
        <div className="grid items-center justify-start gap-4 max-sm:grid-cols-3 sm:flex">
          <InfoLabel info={Company} />
          <InfoLabel info={Location} />
          <InfoLabel info={Remote ? 'Remote' : 'Presencial'} />
          <InfoLabel info={Experience} />
          <InfoLabel info={Salary} />
        </div>
      </div>
      <div className="mt-8 w-full max-w-3xl text-base">
        <p>{Description}</p>
      </div>
    </main>
  )
}
