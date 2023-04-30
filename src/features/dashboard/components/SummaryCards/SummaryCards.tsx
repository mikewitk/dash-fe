import React from 'react'

export default function SummaryCards() {
  return (
    <div className="flex flex-row justify-between">
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </div>
  )
}

function SummaryCard() {
  return (
    <div className="w-56 h-28 flex flex-col items-start rounded-md bg-violet-200 px-5 py-4">
      <div>
        {/* ICON */}
        <p className="text-sm font-normal text-black">Total Revenues</p>
      </div>
      <p className="text-2xl font-bold text-black">$2,129,430</p>
    </div>
  )
}
