'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="cursor-pointer relative text-4xl font-bold text-zinc-200">
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
            className="absolute -top-1 -right-10 -rotate-12 font-extrabold text-white text-xl bg-emerald-500 py-2 px-2 rounded-md cursor-pointer"
          >
            GO
          </motion.span>
        </h1>
      </Link>
      <Menu />
    </header>
  )
}
