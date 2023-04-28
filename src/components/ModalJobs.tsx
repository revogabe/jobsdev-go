'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, PlusCircledIcon } from '@radix-ui/react-icons'
import { TJobsRequest } from '@/types'
import { useMobile } from '@/hooks/useMobile'

const DialogButton = () => {
  const [isPending, setIsPending] = React.useState(false)
  const { isMobile } = useMobile()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as unknown as TJobsRequest
    console.log(data)
    await fetch('https://jobsdevgo.up.railway.app/api/v1/create', {
      method: 'POST',
      body: JSON.stringify({ ...data, remote: !!data.remote }),
    })
    setIsPending(true)
  }

  return (
    <Dialog.Root onOpenChange={(open) => open === false && setIsPending(false)}>
      <Dialog.Trigger asChild>
        <button
          className="flex items-center justify-center  gap-2 rounded-md bg-zinc-900 px-5 py-3 text-base font-bold duration-150 ease-out  hover:bg-emerald-500 active:scale-95"
          rel="noreferrer"
        >
          <PlusCircledIcon width={32} height={32} />
          {!isMobile && 'Postar Vaga'}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-zinc-950/75 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-[6px] border border-zinc-800 bg-zinc-900 p-[25px]  focus:outline-none data-[state=open]:animate-contentShow">
          {isPending ? (
            <>
              <Dialog.Title className="m-0 text-[17px] font-bold text-zinc-200">
                Sua vaga foi publicada!
              </Dialog.Title>
              <Dialog.Description className="mb-5 mt-[4px] text-[15px] leading-normal text-zinc-200">
                Sua vaga esta em análise logo será aprovada com sucesso!
              </Dialog.Description>
            </>
          ) : (
            <>
              <Dialog.Title className="mt-4 text-[17px] font-bold text-zinc-200">
                Publique sua vaga!
              </Dialog.Title>
              <Dialog.Description className="mb-5 mt-[4px] text-[15px] leading-normal text-zinc-200">
                Descreva a vaga e publique agora mesmo!
              </Dialog.Description>
            </>
          )}

          {!isPending && (
            <form onSubmit={handleSubmit} className="">
              <input
                className="inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="title"
                name="title"
                placeholder="Título da vaga"
              />

              <textarea
                className="mt-3 inline-flex h-[82px] w-full flex-1 resize-none items-center justify-center rounded-[4px] bg-zinc-950/50 p-3 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="description"
                name="description"
                placeholder="Descrição da vaga"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="role"
                name="role"
                placeholder="Cargo"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="company"
                name="company"
                placeholder="Empresa"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="location"
                name="location"
                placeholder="Localização"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="experience"
                name="experience"
                placeholder="Experiência necessária"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="salary"
                name="salary"
                placeholder="Salário: (R$ 4.200)"
              />
              <input
                className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                id="link"
                name="link"
                placeholder="Link da vaga"
              />
              <div className="mt-3 flex w-max items-center justify-start gap-2 rounded-md bg-zinc-950/50 px-4 py-2 text-zinc-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 checked:accent-emerald-400"
                  id="remote"
                  name="remote"
                />
                <label htmlFor="remote">Remoto?</label>
              </div>
              <div className="mt-[25px] flex justify-end">
                <button
                  type="submit"
                  className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-emerald-500 px-[15px] font-medium leading-none text-white duration-150 ease-out hover:bg-emerald-800 focus:shadow-[0_0_0_2px] focus:shadow-emerald-500 focus:outline-none"
                >
                  Publicar
                </button>
              </div>
            </form>
          )}
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-zinc-200 duration-150 ease-out hover:bg-zinc-800 focus:shadow-[0_0_0_2px] focus:shadow-zinc-200 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon width={25} height={25} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogButton
