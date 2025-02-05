
import Button from "@/components/Button"
import Card from "@/components/Card"
import DataTable from "@/components/DataTable"
import { BarChart, DollarSign, ShoppingCart, Users } from "lucide-react"

const DashboardPage = () => {
  const userData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users">
          <div className="flex items-center">
            <Users className="w-12 h-12 text-blue-500 mr-4" />
            <div>
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-gray-500">+10% from last month</p>
            </div>
          </div>
        </Card>
        <Card title="Total Sales">
          <div className="flex items-center">
            <DollarSign className="w-12 h-12 text-green-500 mr-4" />
            <div>
              <p className="text-3xl font-bold">$12,345</p>
              <p className="text-gray-500">+5% from last month</p>
            </div>
          </div>
        </Card>
        <Card title="Total Orders">
          <div className="flex items-center">
            <ShoppingCart className="w-12 h-12 text-purple-500 mr-4" />
            <div>
              <p className="text-3xl font-bold">567</p>
              <p className="text-gray-500">+15% from last month</p>
            </div>
          </div>
        </Card>
        <Card title="Conversion Rate">
          <div className="flex items-center">
            <BarChart className="w-12 h-12 text-yellow-500 mr-4" />
            <div>
              <p className="text-3xl font-bold">3.2%</p>
              <p className="text-gray-500">+0.5% from last month</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Recent Users">
        <DataTable data={userData} />
        <div className="mt-4 flex justify-end">
          <Button variant="secondary">View All Users</Button>
        </div>
      </Card>
    </div>
  )
}

export default DashboardPage

