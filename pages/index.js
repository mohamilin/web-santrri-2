import { useState } from "react";
import { Box, Container, Dialog, Grid } from "@mui/material";

import Layout from "@/layouts/Layout";
import SEO from "@/components/SEO";
import CarouselSection from "@/layouts/LandingPage/CarouselSection";
import Feature from "@/layouts/LandingPage/Feature";
import TopCampuses from "@/layouts/LandingPage/TopCampuses";
import Scholarships from "@/layouts/LandingPage/Scholarships";
import apiHomepage from "@/utils/__api__/homepage";

const Home = (props) => {
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
              <TopCampuses campuses={props.homepage.campuses.result.data} />
            </Grid>
            <Grid sx={{mt:2, mb:2}}>
              <Scholarships scholarships={props.homepage.scholarships.result.data} />
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

Home.layout = "Blank";
export default Home;

export const getStaticProps = async () => {
  const page = 1;
  const per_page = 12


  const params = {page, per_page}
  const homepage = await apiHomepage.getHomepage(params)

  return {
    props : {
      homepage
    }
  }
}