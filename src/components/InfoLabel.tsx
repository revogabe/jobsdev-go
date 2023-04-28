import { ReactNode } from 'react'

type InfoLabelProps = {
  info: string | undefined
  icon?: ReactNode
}

export const InfoLabel = ({ info, icon }: InfoLabelProps) => {
  return (
    <p
      title={info}
      className="line-clamp-1 rounded-md bg-zinc-800 px-4 py-1 text-base text-zinc-400 duration-150 ease-out group-hover:bg-zinc-900 group-hover:text-emerald-400 max-sm:text-left"
    >
      {icon} {info}
    </p>
  )
}
