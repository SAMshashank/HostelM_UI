"use client"

import { Search, Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMobileMenuToggle: () => void
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="lg:hidden text-gray-600 hover:bg-gray-100 p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="text-gray-400 text-sm hidden sm:block">📊</div>
          <div>
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">GHRCE BOYS HOSTEL</h1>
            <p className="text-xs lg:text-sm text-gray-500 hidden sm:block">Shegaon Park, Nagpur</p>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search Hostel" className="pl-10 w-48 lg:w-64 bg-orange-50 border-orange-200" />
          </div>

          <Button variant="ghost" size="sm" className="md:hidden p-2">
            <Search className="w-5 h-5 text-gray-600" />
          </Button>

          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5 text-gray-600" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="w-8 h-8 border-2 border-[#674D9F]">
                <AvatarImage src="/assets/BOY.png" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              {/* Online status indicator */}
              <span
                className="absolute bottom-0 right-0 block w-3 h-3 rounded-full border-2 border-white bg-green-500"
                title="Online"
              />
            </div>
            <div className="text-sm hidden sm:block">
              <div className="font-medium">Vaibhav</div>
              <div className="text-gray-500 text-xs">Hostel Warden</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
