import CardScholar from "@/components/CardScholar";
import { H2 } from "@/components/Typography";
import { Box, Grid } from "@mui/material";
import React from "react";

export default function SectionListScholar({ scholarships }) {
  return (
    <Box my={1}>
      <Box mb={3}>
        <H2>Semua Beasiswa</H2>
        {/* <Paragraph></Paragraph> */}
      </Box>
      <Grid container spacing={3}>
        {scholarships.map((i, index) => (
          <Grid item xs={6} md={3} key={index}>
            <CardScholar data={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
