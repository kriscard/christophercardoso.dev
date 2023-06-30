'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <SunIcon />
      <MoonIcon />
    </label>
  )
}

export default ThemeSwitch
