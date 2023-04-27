import { ReactNode } from 'react'

type InfoLabelProps = {
  info: string
  icon?: ReactNode
}

export const InfoLabel = ({ info, icon }: InfoLabelProps) => {
  const classIcon = icon
    ? 'bg-zinc-800 max-sm:w-1/3 max-sm:truncate flex items-center justify-center gap-2 group-hover:bg-zinc-900 ease-out duration-150 group-hover:text-emerald-400 px-3 py-1 text-zinc-400 text-base rounded-md'
    : 'bg-zinc-800 max-sm:w-1/3 max-sm:truncate max-sm:text-center group-hover:bg-zinc-900 ease-out duration-150 group-hover:text-emerald-400 px-3 py-1 text-zinc-400 text-base rounded-md'
  return (
    <p className={classIcon}>
      {icon} {info}
    </p>
  )
}
