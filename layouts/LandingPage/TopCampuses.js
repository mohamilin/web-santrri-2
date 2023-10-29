import React, { useState, useEffect } from "react";
import useWindowSize from "@/helpers/hooks/useWindowSize";
import CategorySectionCreator from "@/components/CategorySectionCreator";
import { HomeWork } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import Carousel from "@/components/carousel/Carousel";
import CardCampus from "@/components/CardCampus";
import Link from "next/link";
import HoverBox from "@/components/HoverBox";
import LazyImage from "@/components/LazyImage";
import { H4 } from "@/components/Typography";

export default function TopCampuses({campuses}) {
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
      icon={<HomeWork />}
      title="Kampus Populer"
      subTitle="Temukan Informasi Jalur Masuk dan Kampus Impianmu"
      seeMoreLink="/info-kampus"
    >
      <Box my="-0.1rem">
        <Carousel totalSlides={campuses.length} visibleSlides={visibleSlides}
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
          {campuses.map((i, index) => (
            <Box key={index}>
              <CardCampus sx={{ p: "1rem" }}>
                <Link href="/">
                  <HoverBox borderRadius={"8px"} mb={1}>
                    <LazyImage
                      src={i.logo}
                      width={500}
                      height={500}
                      alt={i.title + index}
                    />
                  </HoverBox>
                  <Box sx={{backgroundColor: '#ffb74d', opacity:10, p:0.5, borderRadius: 1, mb:1}}>
                    <H4 fontWeight="500" fontSize="12px" >
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
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
