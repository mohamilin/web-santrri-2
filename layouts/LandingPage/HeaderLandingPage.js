import {
  AppBar,
  Toolbar,
  styled,
  useMediaQuery,
  Theme,
  Container,
  Box,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

export default function HeaderLandingPage() {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "80px",
    },
    backgroundColor: theme.palette.background.default,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    color: theme.palette.text.secondary,
  }));

  const lgUp = useMediaQuery((Theme) => Theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((Theme) => Theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBarStyled position="sticky" elevation={8}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <p>Hai</p>
          <Box flexGrow={1}/>
            {lgDown ? (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <IconMenu2 size="20" />
              </IconButton>
            ) : (
              ""
            )}

            {lgUp ? (
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <StyledButton
                  color="inherit"
                  variant="text"
                  href="https://demos.adminmart.com/premium/nextjs/modernize-nextjs/docs/index.html"
                >
                  Documentation
                </StyledButton>
                <StyledButton color="inherit" variant="text" href="https://adminmart.com/support">
                Support
            </StyledButton>
            <Button color="primary" variant="contained" href="/auth/auth1/login">
                Daftar / Masuk
            </Button>
              </Stack>
            ) : null}
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
}
