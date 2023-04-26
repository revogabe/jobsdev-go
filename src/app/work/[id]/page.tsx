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

  console.log(data)
  return Approved ? (
    <main className="min-h-screen w-full mx-auto px-4 pt-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-start lg:items-center justify-between gap-4 lg:flex-row flex-col">
          <h1 className="md:text-5xl text-3xl font-bold">{Title}</h1>
          <div className="flex items-center justify-end gap-3">
            <p className="flex gap-2 items-center justify-center bg-zinc-900 px-6 py-3 rounded-lg text-lg font-bold">
              <BackpackIcon width={24} height={24} /> {Role}
            </p>
            <a
              href={Link}
              className="flex gap-2 items-center justify-center bg-emerald-500 px-6 py-3 rounded-lg text-lg font-bold text-white hover:bg-emerald-800 hover:text-white duration-150 ease-out active:scale-95"
            >
              Aplicar para Vaga
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
            Empresa: {Company}
          </p>
          <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
            Localidade: {Location}
          </p>
        </div>
      </div>
      <div className="text-base w-full max-w-3xl mt-8">
        <p className="whitespace-pre-line">{Description}</p>
      </div>
      <div className="mt-8 flex md:flex-row flex-col gap-4 items-start md:items-center justify-start">
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          {Remote ? 'Remote' : 'Presencial'}
        </p>
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          Experiência: {Experience}
        </p>
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          Salário: {Salary}
        </p>
      </div>
    </main>
  ) : (
    <main className="min-h-screen w-full flex items-start pt-40 justify-center">
      <h1 className="bg-zinc-900 px-8 py-4 rounded-lg">Vaga não encontrada</h1>
    </main>
  )
}
