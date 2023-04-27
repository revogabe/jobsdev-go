import { useEffect, useState } from 'react'

const MAX_MOBILE_WIDTH = 640

export const useMobile = () => {
  const [width, setWidth] = useState<number>(0)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    }
  }, [])

  const isMobile = width <= MAX_MOBILE_WIDTH
  return { isMobile }
}
