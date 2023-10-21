import { Fragment, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  styled,
  useTheme,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Link as Scroll } from "react-scroll";
import { useSession } from "next-auth/react";

import { H1, Span, Paragraph, H6 } from "@/components/Typography";
import { FlexBox, FlexRowCenter } from "@/components/flex-box";
import Layout from "@/layouts/Layout";
import Login from "@/layouts/page-sections/Login";
import SEO from "@/components/SEO";
import Carousel from "@/components/carousel/Carousel";

// styled components
const StyledBox = styled(Box)({
  overflow: "hidden",
  backgroundColor: "#efefef",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
});
const StyledGrid = styled(Grid)(({ theme }) => ({
  margin: "auto",
  maxWidth: 1200,
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginBottom: 30,
    "& h1": {
      fontSize: 35,
      lineHeight: 1.3,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": {
      "& h1": {
        fontSize: 30,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .titleBox": {
      textAlign: "center",
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  background: theme.palette.info.main,
  "&:hover": {
    background: theme.palette.success[400],
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Home = () => {
  const { data: session, status } = useSession();
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const { palette } = useTheme();

  const DIALOG_DRAWER = (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        onClose={toggleDialog}
        sx={{
          zIndex: 9999,
        }}
      >
        <Login caption={"Daftar dengan Google"} />
      </Dialog>
    </Fragment>
  );

  return (
    <>
      <Layout>
        <SEO title={"Santri Hub"} />
        <Box>
          <StyledBox>
            <Carousel
              spacing="0px"
              showDots={true}
              autoPlay={false}
              showArrow={false}
              visibleSlides={1}
              dotClass="carousel-dot"
              dotColor={palette.primary.main}
              totalSlides={1}
            >
              {[{ title: "Mari Bergabung dengan Santri Hub" }].map(
                (i, index) => (
                  <StyledGrid key={index}>
                    <GridItemOne>
                      <Box className="titleBox">
                        <StyledButton
                          sx={{
                            px: "20px",
                            my:1
                          }}
                        >
                          Ekosistem Pendidikan Terintegrasi
                        </StyledButton>
                        <H1 maxWidth={500}>{i.title}</H1>
                        <Paragraph maxWidth={550} sx={{mt:2, fontSize: 15}}>
                        Platform Informasi Kampus, Jalur Masuk, dan Beasiswa Terlengkap di Indonesia, serta Menyediakan Bimbingan Masuk Kampus Impian kamu.
                        </Paragraph>
                      </Box>
                    </GridItemOne>
                  </StyledGrid>
                )
              )}
            </Carousel>
          </StyledBox>
        </Box>
        {/* <Box p={1}>
          <Container
            id="section-1"
            sx={{
              mt: 2,
              position: "relative",
            }}
          >
            <Box maxWidth="830px" mx="auto" mb={12} textAlign="center">
              <H1 fontSize="40px" mb={3}>
                <Span>Lorem Ipsum Ipsum Ipsum</Span> {status}
                <Box color="primary.main" lineHeight={1.2}>
                  Ipsum
                </Box>
              </H1>
              <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph>
              <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph> <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph> <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph> <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph> <Paragraph
                fontSize="18px"
                fontWeight={500}
                maxWidth="540px"
                mx="auto"
                mb={3}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Paragraph>
              <FlexRowCenter
                sx={{
                  mb: 5,
                  flexDirection: {
                    md: "row",
                    xs: "column",
                  },
                }}
              >
                <FlexBox
                  my={1}
                  mr={2}
                  alignItems="center"
                  fontWeight={500}
                  color="grey.900"
                >
                  <DoneIcon
                    color="success"
                    fontSize="small"
                    sx={{
                      mr: 0.6,
                    }}
                  />
                  SSR 
                </FlexBox>

                <FlexBox
                  my={1}
                  mr={2}
                  alignItems="center"
                  fontWeight={500}
                  color="grey.900"
                >
                  <DoneIcon
                    color="success"
                    fontSize="small"
                    sx={{
                      mr: 0.6,
                    }}
                  />
                  Rest API
                </FlexBox>

                <FlexBox
                  my={1}
                  alignItems="center"
                  fontWeight={500}
                  color="grey.900"
                >
                  <DoneIcon
                    color="success"
                    fontSize="small"
                    sx={{
                      mr: 0.6,
                    }}
                  />
                  Multi vendor Support
                </FlexBox>
              </FlexRowCenter>

              {!session && status === 'unauthenticated' && (
                <FlexBox justifyContent="center" mb={3}>
                  <Scroll
                    to="demos"
                    duration={400}
                    offset={-72 - 16}
                    smooth={true}
                  >
                    <Button
                      onClick={toggleDialog}
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        m: "0.5rem",
                        width: 300
                      }}
                    >
                      Daftar
                    </Button>
                  </Scroll>
                </FlexBox>
              )}
              {DIALOG_DRAWER}
            </Box>
          </Container>
        </Box> */}
      </Layout>
    </>
  );
};

Home.layout = "Blank";
export default Home;
