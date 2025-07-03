"use client"

interface StatsCardProps {
  title: string
  count: string
  activeCount: string
  inactiveCount: string
  activeColor: string
  inactiveColor: string
}

function StatsCard({ title, count, activeCount, inactiveCount, activeColor, inactiveColor }: StatsCardProps) {
  return (
    <div className="bg-gradient-to-r from-[#674D9F] to-[#5a4289] text-white p-4 lg:p-6 rounded-lg">
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <h3 className="text-sm lg:text-lg font-medium">{title}</h3>
        <span className="text-2xl lg:text-3xl font-bold">{count}</span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-1 rounded ${activeColor}`}></div>
          <span className="text-xs lg:text-sm">Active - {activeCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-1 rounded ${inactiveColor}`}></div>
          <span className="text-xs lg:text-sm">In-Active - {inactiveCount}</span>
        </div>
      </div>
    </div>
  )
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-6 py-4">
      <StatsCard
        title="Hostel Admin Count"
        count="05"
        activeCount="04"
        inactiveCount="01"
        activeColor="bg-[#a599c2]"
        inactiveColor="bg-yellow-400"
      />
      <StatsCard
        title="Hostel Staff Count"
        count="08"
        activeCount="08"
        inactiveCount="00"
        activeColor="bg-[#a599c2]"
        inactiveColor="bg-gray-400"
      />
      <StatsCard
        title="Hostel Students Count"
        count="200"
        activeCount="150"
        inactiveCount="50"
        activeColor="bg-[#a599c2]"
        inactiveColor="bg-yellow-400"
      />
    </div>
  )
}
