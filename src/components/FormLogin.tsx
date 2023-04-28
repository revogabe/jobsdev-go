'use client'
import { TAuthLogin, TAuthLoginResponse } from '@/types'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import React from 'react'

export const FormLogin = () => {
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData) as unknown as TAuthLogin
    const response = await fetch(
      'https://jobsdevgo.up.railway.app/api/v1/login',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )
    const { data } = (await response.json()) as TAuthLoginResponse
    console.log(data)
    setCookie(null, 'token', data.token)
    router.push('/auth/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="username">
        <input
          className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none transition-all duration-300 placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
          id="username"
          name="username"
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          className="mt-3 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none transition-all duration-300 placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
          id="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button
        type="submit"
        className="mt-8 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-emerald-500 px-[10px] text-[15px] font-bold leading-none text-white"
      >
        Logar
      </button>
    </form>
  )
}
