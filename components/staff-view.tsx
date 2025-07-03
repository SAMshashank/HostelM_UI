"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface StaffCardProps {
  name: string
  id: string
  phone: string
  isActive: boolean
  label: string
}

function StaffCard({ name, id, phone, isActive, label }: StaffCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-800">{label}</span>
       

        <Switch
                      checked={isActive}
                      className={
                        isActive
                          ? "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
                          : "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
                      }
                    />
      </div>

      <Avatar className="w-16 h-16 mx-auto mb-3">
        <AvatarImage src="./assets/BOY.png" className="bg-purple-800" />
        <AvatarFallback className="bg-purple-100 text-purple-600">PM</AvatarFallback>
      </Avatar>

      <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{id}</p>
      <p className="text-sm text-gray-500 mb-4">{phone}</p>

      <Button
        variant="outline"
        size="sm"
        className="text-[#674D9F] border-[#674D9F] hover:bg-[#674D9F]/10 bg-transparent"
      >
        View Profile
      </Button>
    </div>
  )
}

export function StaffView() {
  const wardens = [
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
  ]

  const guards = [
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
    { name: "Pratap Mude", id: "632764", phone: "+91 7834744378", isActive: true },
  ]

  return (
    <div className="px-6 py-4">
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="user-type" className="sr-only">User Type</label>
        <select
          id="user-type"
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm"
        >
          <option>Hostel Staff</option>
          <option>Hostel Admins</option>
          <option>Hostel Students</option>
        </select>

        <div className="flex gap-2 ml-auto">
          <Button size="sm" className="bg-[#674D9F] text-white hover:bg-[#5a4289]">All</Button>
          <Button size="sm" variant="outline">Active</Button>
          <Button size="sm" variant="outline">In-Active</Button>
          <Button size="sm" variant="outline">Left Out</Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Warden Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">WARDEN</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {wardens.map((warden, index) => (
              <StaffCard
                key={index}
                {...warden}
                label={`Warden ${String(index + 1).padStart(2, "0")}`}
              />
            ))}
          </div>
        </div>

        {/* Security Guard Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">SECURITY GUARD</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {guards.map((guard, index) => (
              <StaffCard
                key={index}
                {...guard}
                label={`Guard ${String(index + 1).padStart(2, "0")}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
