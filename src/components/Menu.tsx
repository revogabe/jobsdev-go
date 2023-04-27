import { GitHubLogoIcon } from '@radix-ui/react-icons'
import DialogButton from './ModalJobs'
import { useMobile } from '@/hooks/useMobile'

export const Menu = () => {
  const { isMobile } = useMobile()
  if (isMobile) {
    return (
      <div className="flex gap-3">
        <a
          className="flex font-bold active:scale-95 gap-2 items-center justify-center bg-zinc-900 py-3 px-5 hover:bg-zinc-800 duration-150 ease-out rounded-md text-base"
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
        className="flex font-bold active:scale-95 gap-2 items-center justify-center bg-zinc-900 py-3 px-5 hover:bg-zinc-800 duration-150 ease-out rounded-md text-base"
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
