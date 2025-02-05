import type { ReactNode } from "react"

interface CardProps {
  title: string
  children: ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default Card

