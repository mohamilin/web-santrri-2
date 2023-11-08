import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "@/layouts/Layout";
import SEO from "@/components/SEO";
import { H2 } from "@/components/Typography";
import Image from "next/image";

export default function TentangKami() {
  return (
    <>
      <Layout>
        <SEO title={"Santri Hub | Tentang Kami"} />
        <Container
          sx={{
            my: { md: 10, xs: 5 },
            mb: { xs: 40 },
          }}
        >
          <Box width={"100%"}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box width={"90%"}>
                  <H2>Best platform for students</H2>
                  <Typography mt={2} fontSize={"16px"}>
                    <span style={{ color: "#20dee5", fontWeight: "bolder" }}>
                      {" "}
                      Santri Hub
                    </span>{" "}
                    merupakan startup techno sociopreneur dibidang platform
                    penyedia informasi dan networking terpraktis dan terlengkap
                    bagi pelajar (Siswa dan Mahasiswa), Lembaga Pendidikan, dan
                    Komunitas, terutama bagi pelajar yang akan melanjutkan
                    studinya di kampus impian.
                  </Typography>
                  <Typography mt={2} fontSize={"16px"}>
                    <span style={{ color: "#20dee5", fontWeight: "bolder" }}>
                      {" "}
                      Santri Hub
                    </span>{" "}
                    mengintegrasikan informasi kampus, beasiswa, komunitas,
                    pendidikan, dan event.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Image
                  src="/assets/04.png"
                  width={425}
                  height={250}
                  alt="logo"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
