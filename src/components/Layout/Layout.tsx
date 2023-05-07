import React from 'react'

interface LayoutProps {
  sidebar: React.ReactNode
  content: React.ReactNode
}

export function Layout({ sidebar, content }: LayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-screen-xl">
      <div className="w-280 w-280 flex flex-col bg-gray-200 lg:block ">
        {sidebar}
      </div>
      <div className="py-8 w-full px-4">{content}</div>
    </div>
  )
}
