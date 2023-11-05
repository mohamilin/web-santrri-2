import React, { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import DahboardNavbar from "@/components/navbar/DahboardNavbar";
import DashboardSidebar from "@/components/navbar/DahboardSidebar";
import MobileNavigtion from "./MobileNavigation";
import Link from "next/link";

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
  const [roleId, setRoleId] = useState(1);

  const { data: session, status } = useSession();
  const handleCompactToggle = () =>
    setSidebarCompact((state) => (state ? 0 : 1));

  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => (state ? 0 : 1));

  if (!session && status === "unauthenticated") {
    router.push("/");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user) {
      setRoleId(user?.user?.role_id);
    }
  }, []);

  if (roleId !== 1) {
    return (
      <>
        <Box sx={{textAlign: 'center'}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <p>Not Access</p>
        </Box>
        <Button variant="contained" color="primary">
          <Link href="/">Go to Home</Link>
        </Button>
        </Box>
      </>
    );
  }
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
