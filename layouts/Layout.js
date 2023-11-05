import Header from "@/components/Header";
import Sticky from "@/components/Sticky";
import { useCallback, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Layout({
  children,
  topbarBgColor,
  showTopbar = true,
  showNavbar = true,
}) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);

  return (
    <>
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header isFixed={isFixed} />
      </Sticky>

      <div className="section-after-sticky">
        {/* NAVIGATION BAR */}
        {/* {showNavbar && <Navbar elevation={0} border={1} />} */}

        {/* BODY CONTENT */}
        {children}
      </div>
      <MobileNavigation />
      <Box>
        <Footer />
      </Box>
    </>
  );
}
