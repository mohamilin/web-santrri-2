import React from "react";
import { Box, Grid, styled } from "@mui/material";
import CardComponent from "@/components/CardCampus";
import { H5 } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

const CardFeature = styled(CardComponent)(({ theme }) => ({
  gap: "1rem",
  height: "100%",
  display: "flex",
  padding: "1.5rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    textAlign: "center",
    flexDirection: "column",
  },
}));

export default function Feature() {
  return (
    <Box>
      <Grid container spacing={3}>
        {[
          { name: "Info Kampus", image: "/assets/images/kampus-icon.jpg", link: '/info-kampus' },
          { name: "Beasiswa", image: "/assets/images/beasiswa-icon.jpg", link: '/beasiswa' },
          { name: "Jalur Masuk", image: "/assets/images/jalur-masuk-icon.jpg", link: '/jalur-masuk' },
          { name: "Kalender", image: "/assets/images/kalender-icon.png" , link: '/kalender'},
        ].map((i, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <Link href={i.link}>
              <CardFeature>
                <Image width={46} height={46} alt={i.name} src={i.image} />
                <H5>{i.name}</H5>
              </CardFeature>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
