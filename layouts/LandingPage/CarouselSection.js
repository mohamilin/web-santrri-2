import Image from "@/components/Image";
import { H1, Paragraph } from "@/components/Typography";
import Carousel from "@/components/carousel/Carousel";
import { Box, styled, Grid, Button, useTheme } from "@mui/material";
import React from "react";

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

export default function CarouselSection() {
    const { palette } = useTheme();

    
  return (
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
        {[{ title: "Mari Bergabung dengan Santri Hub" }].map((i, index) => (
          <StyledGrid container key={index}>
            <GridItemOne item md={7} sm={7} xs={12}>
              <Box className="titleBox">
                <StyledButton
                  sx={{
                    px: "20px",
                    my: 1,
                  }}
                >
                  Ekosistem Pendidikan Terintegrasi
                </StyledButton>
                <H1 maxWidth={500}>{i.title}</H1>
                <Paragraph maxWidth={550} sx={{ mt: 2, fontSize: 15 }}>
                  Platform Informasi Kampus, Jalur Masuk, dan Beasiswa
                  Terlengkap di Indonesia, serta Menyediakan Bimbingan Masuk
                  Kampus Impian kamu.
                </Paragraph>
              </Box>
            </GridItemOne>
            <GridItemTwo item md={5} sm={5} xs={12} sx={{ ml: 0 }}>
              {/* <Image
                priority
                src="/assets/ambasador-1.png"
                alt="image"
                width={300}
                height={410}
              /> */}
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
}
