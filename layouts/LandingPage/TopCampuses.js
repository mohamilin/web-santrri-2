import React, { useState, useEffect } from "react";
import useWindowSize from "@/helpers/hooks/useWindowSize";
import CategorySectionCreator from "@/components/CategorySectionCreator";
import { GifBoxTwoTone, HomeWork } from "@mui/icons-material";

export default function TopCampuses() {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return <CategorySectionCreator
  icon={<HomeWork/>}
  title="Kampus Populer"
  subTitle="Temukan Informasi Jalur Masuk dan Kampus Impianmu"
  >
    <p>sdsd</p>
  </CategorySectionCreator>;
}
