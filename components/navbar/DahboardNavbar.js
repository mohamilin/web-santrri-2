import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import { FlexBox, FlexRowCenter } from "../flex-box";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import Icon from "../icons";
// custom styled components
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));
const StyledToolBar = styled(Toolbar)({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
});
const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
}));
const CustomButton = styled(Button)(({ theme }) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

export default function DahboardNavbar({ handleDrawerToggle }) {
  const router = useRouter();
  const { data: session } = useSession();

  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));

 
  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          {downLg && (
            <ToggleWrapper onClick={handleDrawerToggle}>
              <Icon.Toggle />
            </ToggleWrapper>
          )}
          <CustomButton
            onClick={() => router.push("/")}
            startIcon={
              <Icon.Globe
                sx={{
                  color: "grey.900",
                }}
              />
            }
          >
            Santri Hub
          </CustomButton>
          <Box flexGrow={1} />

          <FlexBox alignItems="center" gap={3}>
            <Link
              href={`/api/auth/signout`}
              onClick={async (e) => {
                e.preventDefault();
                await signOut();
                window.location = '/'
              }}
            >
              <Button variant="contained" color="dark" >
                Keluar
              </Button>
            </Link>
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
}
