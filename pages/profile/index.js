import LayoutDashboard from '@/layouts/LayoutDashboard'
import React from 'react'

IndexProfile.getLayout = function getLayout(page) {
    return <LayoutDashboard>{page}</LayoutDashboard>
    
}
export default function IndexProfile() {
  return (
    <div>IndexProfile</div>
  )
}
