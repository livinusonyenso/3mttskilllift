import React from 'react'
import Header from '../component/dashboard/Header'
import Sidebar from '../component/dashboard/Sidebar'
import LocalTranslatorPanel from '../component/dashboard/LocalTranslatorPanel'
import ResourcesSettingsPanel from '../component/dashboard/ResourcesSettingsPanel'

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-5 overflow-y-auto bg-gray-100">
          <ResourcesSettingsPanel />
          <LocalTranslatorPanel />
        </div>
      </div>
    </div>
  )
}
