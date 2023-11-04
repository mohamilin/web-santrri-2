import React from 'react'
import Layout from './Layout'
import { Container, Grid } from '@mui/material'
import LayoutNavigationDashboardUser from './LayoutNavigationDashboardUser'

export default function LayoutDashboardUser({children}) {
  return (
    <Layout>
       <Container sx={{my: '2rem'}}>
        <Grid container spacing={3}>
            <Grid item lg={3} xs={12} sx={{display: {
                xs: 'none', sm: 'none', 'md': 'block'
            }}}>

                <LayoutNavigationDashboardUser />
            </Grid>
            <Grid item lg={9} xs={12}>
                {children}
            </Grid>
        </Grid>
       </Container>
    </Layout>
  )
}
