"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, Plus } from "lucide-react"

interface StepProps {
  title: string
  completed: boolean
  active: boolean
}

function Step({ title, completed, active }: StepProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
          completed ? "bg-[#674D9F] text-white" : active ? "bg-[#674D9F] text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {completed ? "✓" : ""}
      </div>
      <span className={`text-sm ${active ? "text-[#674D9F] font-medium" : "text-gray-600"}`}>{title}</span>
    </div>
  )
}

export function HostelDetailsForm() {
  const [selectedFloor, setSelectedFloor] = useState("G")
  const [selectedRooms, setSelectedRooms] = useState(["01", "02", "03"])

  const steps = [
    { title: "Personal Details", completed: true, active: false },
    { title: "Family Details", completed: true, active: false },
    { title: "Hostel Details", completed: false, active: true },
    { title: "Academic Details", completed: false, active: false },
    { title: "KYC Documents", completed: false, active: false },
    { title: "Vehicle Details", completed: false, active: false },
  ]

  const floors = ["G", "F1", "F2", "F3"]
  const rooms = ["01", "02", "03", "04", "05"]

  return (
    <div className="bg-white">
      <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
        <Button variant="ghost" size="sm" className="text-gray-600">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-gray-200 p-4 lg:p-6">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-8">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#674D9F] mb-6 lg:mb-8">Hostel Details</h2>

            <div className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Name</label>
                <select
                  id="bedType"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-500"
                >
                  <option>Select Hostel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Building/Wing</label>
                <select
                  id="bedType"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-500"
                >
                  <option>Select Hostel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Floor Number</label>
                <div className="mb-2">
                  <span className="text-sm text-gray-600">Floor</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {floors.map((floor) => (
                    <Button
                      key={floor}
                      variant={selectedFloor === floor ? "default" : "outline"}
                      size="sm"
                      className={`w-12 h-12 rounded-full ${
                        selectedFloor === floor
                          ? "bg-[#674D9F] text-white hover:bg-[#5a4289]"
                          : "border-gray-300 text-gray-600"
                      }`}
                      onClick={() => setSelectedFloor(floor)}
                    >
                      {floor}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Number</label>
                <div className="flex gap-2 flex-wrap">
                  {rooms.map((room) => (
                    <Button
                      key={room}
                      variant="outline"
                      size="sm"
                      className="w-12 h-10 border-gray-300 text-gray-600 bg-transparent"
                    >
                      {room}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm" className="w-12 h-10 bg-[#674D9F] text-white border-[#674D9F]">
                    ...
                  </Button>
                </div>
              </div>

              <div>
                <label htmlFor="bedType" className="block text-sm font-medium text-gray-700 mb-2">Select Bed Type</label>
                <select
                  id="bedType"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-500"
                >
                  <option>Select Bed Type</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bed Number</label>
                <select
                  id="bedType"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-500"
                >
                  <option>Select Number</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Roommates</label>
                <div className="flex items-center gap-6 flex-wrap">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src="./assets/BOY.png" className="bg-gray-200" />
                    <AvatarFallback className="bg-green-100 text-green-600">R1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-9 h-9">
                    <AvatarImage src="./assets/BOY.png" className="bg-gray-200" />
                    <AvatarFallback className="bg-green-100 text-green-600">R2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-9 h-9">
                    <AvatarImage src="./assets/BOY.png" className="bg-gray-200"/>
                    <AvatarFallback className="bg-green-100 text-green-600">R3</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-9 h-9 rounded-full border-gray-300 text-gray-400 bg-transparent"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
