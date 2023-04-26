'use client'
import { parseCookies } from 'nookies'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

const { token } = parseCookies()

export default function ProviderAuth({ children }: { children: ReactNode }) {
  const router = useRouter()
  if (token !== process.env.NEXT_PUBLIC_SECRET_KEY) {
    router.push('/')
  }
  return <div>{children}</div>
}
