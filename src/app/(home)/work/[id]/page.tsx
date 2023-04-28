import { InfoLabel } from '@/components/InfoLabel'
import { TJobsResponseUnique } from '@/types'
import { BackpackIcon } from '@radix-ui/react-icons'

interface PageProps {
  params: {
    id: string
  }
}

export default async function WorkPage({ params }: PageProps) {
  const response = await fetch(
    `https://jobsdevgo.up.railway.app/api/v1/jobs?id=${params.id}`,
    {
      cache: 'no-store',
      next: {
        revalidate: 60,
      },
    },
  )

  const { data } = (await response.json()) as TJobsResponseUnique
  const {
    Title,
    Description,
    Company,
    Remote,
    Role,
    Experience,
    Salary,
    Link,
    Location,
    Approved,
  } = data

  return Approved ? (
    <main className="mx-auto min-h-screen w-full px-4 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <h1 className="text-3xl font-bold md:text-5xl">{Title}</h1>
          <div className="flex items-center justify-end gap-3">
            <p className="flex items-center justify-center gap-2 truncate rounded-lg bg-zinc-900 px-6 py-3 text-lg font-bold">
              <BackpackIcon width={24} height={24} /> {Role}
            </p>
            <a
              href={Link}
              target="_blank"
              className="flex items-center justify-center gap-2 truncate rounded-lg bg-emerald-500 px-6 py-3 text-lg font-bold text-white duration-150 ease-out hover:bg-emerald-800 hover:text-white active:scale-95"
              rel="noreferrer"
            >
              Aplicar para Vaga
            </a>
          </div>
        </div>
        <div className="items-center justify-start gap-4 max-sm:grid max-sm:grid-cols-3 sm:flex">
          <InfoLabel info={Company} />
          <InfoLabel info={Location} />
          <InfoLabel info={Remote ? 'Remote' : 'Presencial'} />
          <InfoLabel info={Experience} />
          <InfoLabel info={Salary} />
        </div>
      </div>
      <div className="mt-8 w-full max-w-3xl rounded-lg bg-zinc-900 p-6 text-base">
        <p className="whitespace-pre-line">{Description}</p>
      </div>
    </main>
  ) : (
    <main className="flex min-h-screen w-full items-start justify-center pt-40">
      <h1 className="rounded-lg bg-zinc-900 px-8 py-4">Vaga não encontrada</h1>
    </main>
  )
}
