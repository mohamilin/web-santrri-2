import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import DahboardNavbar from "@/components/navbar/DahboardNavbar";
import DashboardSidebar from "@/components/navbar/DahboardSidebar";
import Login from "./page-sections/Login";
import MobileNavigtion from "./MobileNavigtion";

// styled components
const BodyWrapper = styled(Box)(({ theme, compact }) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? "86px" : "280px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
  },
}));
const InnerWrapper = styled(Box)(({ theme }) => ({
  transition: "all 0.3s",
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1200,
    margin: "auto",
  },
  [theme.breakpoints.down(1550)]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

export default function LayoutDashboard({ children }) {
  const router = useRouter();
  const [sidebarCompact, setSidebarCompact] = useState(0);
  const [showMobileSideBar, setShowMobileSideBar] = useState(0);

  const { data: session, status } = useSession();
  const handleCompactToggle = () =>
    setSidebarCompact((state) => (state ? 0 : 1));

  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => (state ? 0 : 1));

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [router, session]);
 

  return (
    <>
      {session && status === "authenticated" && (
        <>
          <DashboardSidebar
            sidebarCompact={sidebarCompact}
            showMobileSideBar={showMobileSideBar}
            setSidebarCompact={handleCompactToggle}
            setShowMobileSideBar={handleMobileDrawerToggle}
          />
          <BodyWrapper compact={sidebarCompact ? 1 : 0}>
            <DahboardNavbar handleDrawerToggle={handleMobileDrawerToggle} />
            <InnerWrapper>{children}</InnerWrapper>
          </BodyWrapper>
          <MobileNavigtion />
        </>
      )}
    </>
  );
}
