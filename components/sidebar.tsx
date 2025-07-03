"use client"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  AlertTriangle,
  MessageSquare,
  Calendar,
  FileText,
  UtensilsCrossed,
  CreditCard,
  Wifi,
  Package,
  UserCheck,
  MessageCircle,
  Shirt,
  Building,
  Package2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: BarChart3, label: "Reports & Analytics", active: false },
  { icon: Users, label: "Users", active: true },
  { icon: AlertTriangle, label: "Emergency", active: false },
  { icon: MessageSquare, label: "Complaints", active: false },
  { icon: Calendar, label: "Attendance", active: false },
  { icon: FileText, label: "Leaves", active: false },
  { icon: UtensilsCrossed, label: "Hostel Mess", active: false },
  { icon: CreditCard, label: "Fees", active: false },
  { icon: Wifi, label: "Amenities", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: UserCheck, label: "Visitors", active: false },
  { icon: MessageCircle, label: "Community", active: false },
  { icon: Shirt, label: "Laundry", active: false },
  { icon: Building, label: "Rooms Allocation", active: false },
  { icon: Package2, label: "Parcel", active: false },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
  isMobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ isCollapsed, onToggle, isMobileOpen, onMobileClose }: SidebarProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const target = event.target as Node

      if (isMobileOpen && sidebar && !sidebar.contains(target)) {
        onMobileClose()
      }
    }

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileOpen, onMobileClose])

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex ${
          isCollapsed ? "w-16 rounded-r-3xl" : "w-64"
        } min-h-screen flex-col transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Logo and Toggle Button */}
        <div className="bg-white p-4 lg:p-6 flex items-center justify-between">
          {!isCollapsed && (
            <img
              src="./assets/LOGO.png"
              alt="YOCO Status - Stay safe & secure"
              className="h-12 lg:h-16 w-auto mx-6"
            />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-gray-600 hover:bg-gray-100 p-2"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Purple Sidebar Content with Top-Right Curve */}
        <div
          className="flex-1 relative bg-[#674D9F] text-white overflow-hidden"
          style={{ borderTopRightRadius: "2rem" }}
        >
          {/* Top-Right Curve */}
          {!isCollapsed && (
            <img
              src="/images/curve-separator.svg"
              alt="Top Curve"
              className="absolute -top-6 right-0 w-24 h-auto z-10"
            />
          )}

          <nav className="relative z-20 p-4 lg:p-6 space-y-1 lg:space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "gap-3"
                } px-3 lg:px-4 py-2 lg:py-3 rounded-lg cursor-pointer transition-colors ${
                  item.active ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon
                  className={`flex-shrink-0 ${
                    isCollapsed ? "w-5 h-5" : "w-4 h-4 lg:w-5 lg:h-5"
                  }`}
                />
                {!isCollapsed && (
                  <span className="text-xs lg:text-sm font-medium">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="bg-white p-4 flex items-center justify-between border-b">
          <img
            src="./assets/LOGO.png"
            alt="YOCO Status - Stay safe & secure"
            className="h-12 w-auto "
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileClose}
            className="text-gray-600 hover:bg-gray-100 p-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Curve Separator */}
        <div className="relative">
          <img src="/images/curve-separator.svg" alt="" className="w-full" />
        </div>

        {/* Mobile Menu */}
        <div
          className="flex-1 bg-[#674D9F] text-white h-full overflow-y-auto"
          style={{ borderTopRightRadius: "2rem" }}
        >
          <nav className="p-4 space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  item.active ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"
                }`}
                onClick={onMobileClose}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
