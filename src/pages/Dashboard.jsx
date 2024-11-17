
import React from 'react'
import Header from '../component/dashboard/Header'
import Sidebar from '../component/dashboard/Sidebar'
import ResourcesSettingsPanel from '../component/dashboard/ResourcesSettingsPanel'

export default function Dashboard() {
 
  return (
    <div className="flex flex-col h-screen"> 
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-5 overflow-y-auto bg-gray-100">
          <ResourcesSettingsPanel />
        </div>
      </div>
    </div>
  )
}


