import { TJobs } from '@/types'
import Link from 'next/link'
import { InfoLabel } from './InfoLabel'

type OwnerProps = {
  Owner: boolean
}

export const CardJobs = ({
  ID,
  Title,
  Description,
  Company,
  Remote,
  Role,
  Owner,
}: TJobs & OwnerProps) => {
  return (
    <Link
      href={Owner ? `/auth/dashboard/work/${ID}` : `work/${ID}`}
      className="group relative flex w-full flex-col gap-5 rounded-lg border border-zinc-800 bg-zinc-900 p-6 duration-200  ease-out hover:translate-y-[-6px] hover:bg-zinc-900/50"
    >
      <div className="max-sm: flex w-full flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-200 ">{Title}</h1>
        <p className="line-clamp-3 text-sm font-normal text-zinc-400">
          {Description}
        </p>
      </div>
      <div className="flex items-center justify-start gap-3 max-sm:flex-row">
        <InfoLabel info={Company} />
        <InfoLabel info={Role} />
        <InfoLabel info={!Remote ? 'Presencial' : 'Remoto'} />
      </div>
    </Link>
  )
}
