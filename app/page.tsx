"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { UserManagementHeader } from "@/components/user-management-header"
import { StatsCards } from "@/components/stats-cards"
import { AdminView } from "@/components/admin-view"
import { StaffView } from "@/components/staff-view"
import { StudentsView } from "@/components/students-view"
import { HostelDetailsForm } from "@/components/hostel-details-form"

type ViewType = "admin" | "staff" | "students" | "hostel-details"

export default function HostelManagement() {
  const [currentView, setCurrentView] = useState<ViewType>("admin")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(false)
        setMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "admin":
        return <AdminView />
      case "staff":
        return <StaffView />
      case "students":
        return <StudentsView />
      case "hostel-details":
        return <HostelDetailsForm />
      default:
        return <AdminView />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        isMobileOpen={mobileMenuOpen}
        onMobileClose={closeMobileMenu}
      />

      <div className="flex-1 transition-all duration-300 ease-in-out min-w-0">
        <Header onMobileMenuToggle={toggleMobileMenu} />

        {currentView !== "hostel-details" && (
          <>
            <UserManagementHeader />
            <StatsCards />
          </>
        )}

        {currentView === "hostel-details" ? (
          <HostelDetailsForm />
        ) : (
          <div className="bg-white mx-4 lg:mx-6 rounded-lg shadow-sm">{renderCurrentView()}</div>
        )}

        {/* Mobile-friendly view switcher */}
        <div className="fixed bottom-4 right-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setCurrentView("admin")}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
              currentView === "admin" ? "bg-[#674D9F] text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setCurrentView("staff")}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
              currentView === "staff" ? "bg-[#674D9F] text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Staff
          </button>
          <button
            onClick={() => setCurrentView("students")}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
              currentView === "students" ? "bg-[#674D9F] text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setCurrentView("hostel-details")}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
              currentView === "hostel-details" ? "bg-[#674D9F] text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}
