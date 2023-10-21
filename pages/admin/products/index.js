import React from 'react'

import LayoutDashboard from "@/layouts/LayoutDashboard";
import { Box } from '@mui/material';


IndexProducts.getLayout = function getLayout(page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default function IndexProducts() {
  return (
    <Box py={4}>
        dsd
    </Box>
  )
}
