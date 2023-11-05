import React from 'react'
import CardScholar from "@/components/CardScholar";
import { H2 } from "@/components/Typography";
import { Box, Grid } from "@mui/material";
import CardJalurMasuk from '@/components/CardJalurMasuk';

export default function SectionListJalurMasuk({ jalurMasuk }) {
  return (
    <Box my={1}>
      <Box mb={3}>
        <H2>Semua Jalur Masuk</H2>
        {/* <Paragraph></Paragraph> */}
      </Box>
      <Grid container spacing={3}>
        {jalurMasuk?.map((i, index) => (
          <Grid item xs={6} md={3} key={index}>
            < CardJalurMasuk data={i} campus={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
