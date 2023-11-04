import { FlexBox } from "@/components/flex-box";
import NavLink from "@/components/nav-link/NavLink";
import { navigationDashboardUser } from "@/utils/constants/menu/navigationDashboardUser";
import { Box, Card, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

// custom styled components
const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)",
  },
}));
const StyledNavLink = styled(({ children, isCurrentPath, ...rest }) => (
  <NavLink {...rest}>{children}</NavLink>
))(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function LayoutNavigationDashboardUser() {
  const { pathname } = useRouter();

  return (
    <MainContainer>
      {navigationDashboardUser.map((i, index) => (
        <div key={index}>
          <Typography p={"26px 30px 1rem"} color="grey.600" fontSize="12px">
            {" "}
            {i.title}
          </Typography>

          {i.list.map((item, jIndex) => (
            <Box key={jIndex}>
              <StyledNavLink
                href={item.href}
                key={jIndex}
                isCurrentPath={pathname.includes(item.href)}
              >
                <FlexBox alignItems="center" gap={3}>
                  <item.icon
                    color="inherit"
                    fontSize="small"
                    className="nav-icon"
                  />
                  <span>{item.title}</span>
                </FlexBox>
              </StyledNavLink>
            </Box>
          ))}
        </div>
      ))}
    </MainContainer>
  );
}
