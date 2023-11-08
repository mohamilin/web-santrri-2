import React from 'react'
import LayoutDashboardUser from './LayoutDashboardUser'
import UserDashboardHeader from './UserDashboardHeader'
import LayoutNavigationDashboardUser from './LayoutNavigationDashboardUser'
import { Person } from '@mui/icons-material'

export default function LayoutProfile({children, title}) {
  console.log({
    children, title
  })
  return (
    <LayoutDashboardUser>
      <UserDashboardHeader
        icon={Person}
        title={title}
        button={[]}
        navigation={<LayoutNavigationDashboardUser />}
      />
      {children}
    </LayoutDashboardUser>
  )
}
