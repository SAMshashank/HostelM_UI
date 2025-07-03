"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import React from "react"

interface AdminCardProps {
  name: string
  id: string
  phone: string
  isActive: boolean
  onToggle: () => void
}

function AdminCard({ name, id, phone, isActive, onToggle }: AdminCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 text-center shadow-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs lg:text-sm font-medium">ADMIN 01</span>
        {/* <Switch checked={isActive} onCheckedChange={onToggle} /> */}

        <Switch
          checked={isActive}
          onCheckedChange={onToggle}
          className={isActive
            ? "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
            : "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
          }
        />
      </div>

      <Avatar className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4">
        <AvatarImage src="./assets/BOY.png" className="bg-purple-800"/>
        <AvatarFallback className="bg-green-100 text-green-600">PM</AvatarFallback>
      </Avatar>

      <h3 className="font-medium text-gray-900 mb-1 text-sm lg:text-base">{name}</h3>
      <p className="text-xs lg:text-sm text-gray-500 mb-1">{id}</p>
      <p className="text-xs lg:text-sm text-gray-500 mb-4">{phone}</p>

      <Button
        variant="outline"
        size="sm"
        className="text-[#674D9F] border-[#674D9F] hover:bg-[#674D9F]/10 bg-transparent text-xs lg:text-sm"
      >
        View Profile
      </Button>
    </div>
  )
}

export function AdminView() {
  const [admins, setAdmins] = React.useState([
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: false },
  ])

  const handleToggle = (index: number) => {
    setAdmins((prev) =>
      prev.map((admin, i) =>
        i === index ? { ...admin, isActive: !admin.isActive } : admin
      )
    )
  }

  return (
    <div className="px-4 lg:px-6 py-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-6">
        <label htmlFor="user-type" className="sr-only">User Type</label>
        <select
          id="user-type"
          title="User Type"
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white w-full lg:w-auto"
        >
          <option>Hostel Staff</option>
          <option>Hostel Admins</option>
          <option>Hostel Students</option>
        </select>

        <div className="flex flex-wrap gap-2 w-full lg:ml-auto lg:w-auto">
          <Button size="sm" className="bg-[#674D9F] text-white hover:bg-[#5a4289]">
            All
          </Button>
          <Button size="sm" variant="outline">
            Active
          </Button>
          <Button size="sm" variant="outline">
            In-Active
          </Button>
          <Button size="sm" variant="outline">
            Left Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {admins.map((admin, index) => (
          <AdminCard
            key={index}
            {...admin}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}
