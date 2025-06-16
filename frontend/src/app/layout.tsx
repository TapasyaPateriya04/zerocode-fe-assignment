'use client'

import { useEffect, useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  // Apply theme class to <html> early
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Update html class and save preference
  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
        {children}
      </body>
    </html>
  )
}
