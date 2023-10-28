import { Fragment, useState } from "react";
import { Box, Container, Dialog, Grid } from "@mui/material";

import Layout from "@/layouts/Layout";
import SEO from "@/components/SEO";
import CarouselSection from "@/layouts/LandingPage/CarouselSection";
import Feature from "@/layouts/LandingPage/Feature";
import TopCampuses from "@/layouts/LandingPage/TopCampuses";

const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(!dialogOpen);

  return (
    <>
      <Layout>
        <SEO title={"Santri Hub"} />
        <Box>
          <CarouselSection />
        </Box>
        <Box>
          <Container>
            <Grid sx={{mt:2, mb:5}}>
              <Feature />
            </Grid>
            <Grid sx={{mt:2, mb:2}}>
              <TopCampuses />
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

Home.layout = "Blank";
export default Home;
