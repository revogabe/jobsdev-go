import { GitHubLogoIcon } from '@radix-ui/react-icons'
import DialogButton from './ModalJobs'
import { useMobile } from '@/hooks/useMobile'

export const Menu = () => {
  const { isMobile } = useMobile()
  if (isMobile) {
    return (
      <div className="flex gap-3">
        <a
          className="flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-base font-bold duration-150 ease-out hover:bg-zinc-800 active:scale-95"
          href="https://github.com/revogabe"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
        <DialogButton />
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <a
        className="flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-base font-bold duration-150 ease-out hover:bg-zinc-800 active:scale-95"
        href="https://github.com/revogabe"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubLogoIcon width={20} height={20} />
        Github
      </a>
      <DialogButton />
    </div>
  )
}
