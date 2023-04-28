import { FormLogin } from '@/components/FormLogin'
import React from 'react'

export default async function Login() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-start gap-12 overflow-x-hidden p-4">
      <div className="mt-40 flex w-full max-w-md flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-8">
        <h6 className="text-xl font-bold text-emerald-500">Login Account</h6>
        <FormLogin />
      </div>
    </main>
  )
}
