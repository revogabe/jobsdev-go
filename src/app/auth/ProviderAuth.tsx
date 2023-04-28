'use client'
import { parseCookies } from 'nookies'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProviderAuth({ children }: { children: ReactNode }) {
  const { token } = parseCookies()
  const router = useRouter()

  async function validateUser() {
    const data = await fetch(
      'https://jobsdevgo.up.railway.app/api/v1/auth/validate',
      {
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      },
    )
    if (data.status === 401) {
      router.push('/auth/login')
    }
  }

  useEffect(() => {
    if (!token) {
      router.push('/auth/login')
    }
    validateUser()
  }, [])
  return <div>{children}</div>
}
