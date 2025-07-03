"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function UserManagementHeader() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="bg-white px-4 lg:px-6 py-4 lg:py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-[#674D9F]">User Management</h2>
          <p className="text-gray-500 text-sm">Hi, Welcome to User Management</p>
        </div>

        <div className="relative w-full sm:w-auto">
          <Button
            className="bg-[#674D9F] hover:bg-[#5a4289] text-white w-full sm:w-auto"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Add Users
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-40 z-10">
              <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm" onClick={() => setShowDropdown(false)}>
                Add Staff
              </div>
              <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm" onClick={() => setShowDropdown(false)}>
                Add Student
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
