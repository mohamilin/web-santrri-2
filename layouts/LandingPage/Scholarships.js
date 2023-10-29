import React, { useState, useEffect } from "react";
import useWindowSize from "@/helpers/hooks/useWindowSize";
import CategorySectionCreator from "@/components/CategorySectionCreator";
import { HomeWork, School } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import Carousel from "@/components/carousel/Carousel";
import CardCampus from "@/components/CardCampus";
import Link from "next/link";
import HoverBox from "@/components/HoverBox";
import LazyImage from "@/components/LazyImage";
import CardScholar from "@/components/CardScholar";

export default function Scholarships({ scholarships }) {
  const width = useWindowSize();
    const { palette, shadows } = useTheme();

  const [visibleSlides, setVisibleSlides] = useState(4);
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator
      icon={<School />}
      title="Beasiswa Populer"
      subTitle="Temukan Informasi Beasiswa dalam dan Luar Negeri"
      seeMoreLink="/beasiswa"
    >
      <Box my="-0.1rem">
        <Carousel totalSlides={scholarships.length} visibleSlides={visibleSlides}
        sx={{
          "& .carousel__slider": {
            paddingBottom: "15px",
          },
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: shadows[2],
            color: palette.primary.main,
            background: palette.primary[50],
            "&:hover": {
              background: palette.primary[100],
            },
          },
        }}
        >
          {scholarships.map((data, index) => (
            <CardScholar key={index} data={data} />
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
