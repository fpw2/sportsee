import "../styles/index.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Dashboard from "../components/Dashboard"

export default function Profile() {
  return (<>
    <Navbar />
    <div className="block-sidebar-dashboard">
      <Sidebar />
      <Dashboard />
    </div>
  </>
  )
}

