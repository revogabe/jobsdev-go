'use client'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React from 'react'

type ButtonProps = {
  ID: number
}

export function ButtonApply({ ID }: ButtonProps) {
  const router = useRouter()
  const { token } = parseCookies()

  async function handleDeletePost() {
    await fetch(
      `https://jobsdevgo.up.railway.app/api/v1/auth/delete?id=${ID}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`,
        },
      },
    )
    router.push('/auth/dashboard')
  }

  async function handleApprovedPost() {
    await fetch(
      `https://jobsdevgo.up.railway.app/api/v1/auth/approved?id=${ID}`,
      {
        method: 'PUT',
        headers: {
          authorization: `${token}`,
        },
      },
    )
    router.push('/auth/dashboard')
  }

  return (
    <div className="flex items-center justify-start gap-2">
      <button
        onClick={handleApprovedPost}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-lg font-bold text-white duration-150 ease-out hover:bg-blue-800 hover:text-white active:scale-95"
      >
        Aprovar
      </button>
      <button
        onClick={handleDeletePost}
        className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-lg font-bold text-white duration-150 ease-out hover:bg-red-800 hover:text-white active:scale-95"
      >
        Deletar
      </button>
    </div>
  )
}
