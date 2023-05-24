import React from 'react'

interface LayoutProps {
  sidebar: React.ReactNode
  content: React.ReactNode
}

export function Layout({ sidebar, content }: LayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-screen-xl">
      <div className="flex w-[280px] flex-col bg-blue-400">{sidebar}</div>
      <div className="py-8 flex-grow px-4">{content}</div>
    </div>
  )
}
