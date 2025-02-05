"use client"

import { Bell, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <div className="flex items-center">
          <button className="p-2 mr-4 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
          </button>
          <button className="flex items-center text-gray-700 hover:text-gray-900 mr-4">
            <User className="w-6 h-6 mr-2" />
            <span>John Doe</span>
          </button>
          <button onClick={handleLogout} className="flex items-center text-gray-700 hover:text-gray-900">
            <LogOut className="w-6 h-6 mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

