import React from "react";
import { H2, H4 } from "@/components/Typography";
import { Box, Grid } from "@mui/material";
import CardCampus from "@/components/CardCampus";
import Link from "next/link";
import HoverBox from "@/components/HoverBox";
import LazyImage from "@/components/LazyImage";

export default function SectionListCampus({ campuses }) {
  return (
    <Box my={1}>
      <Box mb={3}>
        <H2>Semua Kampus</H2>
        {/* <Paragraph></Paragraph> */}
      </Box>
      <Grid container spacing={3}>
        {campuses?.map((i, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <CardCampus sx={{ p: "1rem" }}>
              <Link href={`/info-kampus/${i.slug}`}>
                <HoverBox borderRadius={"8px"} mb={1}>
                  <LazyImage
                    src={i.logo}
                    width={500}
                    height={500}
                    alt={"logo"}
                  />
                </HoverBox>
                <Box
                  sx={{
                    backgroundColor: "#ffb74d",
                    opacity: 10,
                    p: 0.5,
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <H4 fontWeight="500" fontSize="12px">
                    {i.category}
                  </H4>
                </Box>
                <H4 fontWeight="600" fontSize="12px" mb={0.5}>
                  {i.name}
                </H4>
                <H4 fontWeight="600" fontSize="12px" mb={0.5}>
                  {i.city}, {i.province}
                </H4>
              </Link>
            </CardCampus>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
