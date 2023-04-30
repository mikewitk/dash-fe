import React from 'react'

interface LayoutProps {
  sidebar: React.ReactNode
  content: React.ReactNode
}

export function Layout({ sidebar, content }: LayoutProps) {
  return (
    <div className="flex w-full ">
      <div className="flex flex-row">
        <div className="w-1/5 text-center">{sidebar}</div>
        <div className="w-3/5 text-center">{content}</div>
      </div>
    </div>
  )
}
