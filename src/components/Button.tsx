import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm"
  const variantClasses =
    variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

