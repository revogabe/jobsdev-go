import { CardJobs } from '@/components/CardJobs'
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
    <main className="container flex min-h-screen flex-col items-start justify-start gap-12 overflow-x-hidden p-4">
      <div className="relative flex h-64 w-full items-center justify-between gap-8 overflow-hidden rounded-xl sm:h-96">
        <h1 className="group z-40 max-w-2xl select-none text-7xl font-bold text-emerald-500 duration-200 ease-out hover:text-zinc-200 max-sm:text-6xl">
          Encontre{' '}
          <span className="text-zinc-200 duration-200 ease-out group-hover:text-emerald-500">
            sua vaga
          </span>{' '}
          agora mesmo!
        </h1>
        <div className="absolute bottom-0 z-30 h-32 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="relative w-full max-w-lg">
          <div className="pointer-events-none absolute right-0 top-0 -mt-40 h-[1026px] w-[1026px] stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]">
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin "
            >
              <path
                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                stroke="#5e5e5e"
                strokeOpacity="0.7"
              ></path>
              <path
                d="M513 1025C230.23 1025 1 795.77 1 513"
                stroke="url(#:R65m:-gradient-1)"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":R65m:-gradient-1"
                  x1="1"
                  y1="513"
                  x2="1"
                  y2="1025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#10b981"></stop>
                  <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin"
            >
              <path
                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                stroke="#5e5e5e"
                strokeOpacity="0.7"
              ></path>
              <path
                d="M913 513c0 220.914-179.086 400-400 400"
                stroke="url(#:R65m:-gradient-2)"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":R65m:-gradient-2"
                  x1="913"
                  y1="513"
                  x2="913"
                  y2="913"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#10b981"></stop>
                  <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        {Approved.reverse().map(
          ({ ID, Title, Description, Role, Company, Remote }) => (
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
          ),
        )}
      </div>
    </main>
  )
}
