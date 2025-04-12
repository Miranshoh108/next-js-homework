import React from 'react'
import Sidebar from '../sidebar'
import Main from '../main'


const Dashboard = () => {
  return (
    <div className="grid grid-cols-[1fr_4fr] max-[900px]:grid-cols-1">
    <Sidebar />
    <Main />
  </div>
  )
}

export default Dashboard