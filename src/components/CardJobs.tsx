import { TJobs } from '@/types'
import { BackpackIcon } from '@radix-ui/react-icons'
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
      href={Owner ? `dashboard/work/${ID}` : `work/${ID}`}
      className="w-full relative gap-5 hover:translate-y-[-6px] ease-out duration-200 hover:bg-zinc-900/50 group px-6 py-6 flex flex-col  rounded-lg bg-zinc-900 border border-zinc-800"
    >
      <div className="w-full flex flex-col gap-1 max-sm:">
        <h1 className="text-2xl font-bold text-zinc-200 ">{Title}</h1>
        <p className="text-zinc-400 font-normal text-sm line-clamp-3">
          {Description}
        </p>
      </div>
      <div className="flex max-sm:flex-row items-center gap-3 justify-start">
        <InfoLabel info={Company} />
        <InfoLabel info={Role} icon={<BackpackIcon width={20} height={20} />} />
        <InfoLabel info={!Remote ? 'Presencial' : 'Remoto'} />
      </div>
    </Link>
  )
}
