'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 py-6">
      <Link href="/">
        <h1 className="relative cursor-pointer text-4xl font-bold text-zinc-200">
          JobsDev{' '}
          <motion.span
            initial={{ scale: 0, rotate: 90 }}
            animate={{ rotate: -12, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="absolute -right-10 -top-1 -rotate-12 cursor-pointer rounded-md bg-emerald-500 p-2 text-xl font-extrabold text-white"
          >
            GO
          </motion.span>
        </h1>
      </Link>
      <Menu />
    </header>
  )
}
