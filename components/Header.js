import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

import { Box, Button, Dialog, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import useMediaQuery from "@mui/material/useMediaQuery";

import { layoutConstant } from "@/utils/constants";
import Login from "@/layouts/page-sections/Login";
import { FlexBox } from "./flex-box";
import api from "@/utils/__api__/api";
import MobileMenu from "./navbar/MobileMenu";
import Image from "./Image";

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));
const StyledContainer = styled(Container)({
  gap: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

// ==============================================================

// ==============================================================

const MENU = [
  { title: "Home", url: "/" },
  { title: "Tentang Kami", url: "/tentang-kami" },
  { title: "Info Kampus", url: "/info-kampus" },
  { title: "Beasiswa", url: "/beasiswa" },
  { title: "Jalur Masuk", url: "/jalur-masuk" },
];

const Header = ({ className }) => {
  const theme = useTheme();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  const [dialogOpen, setDialogOpen] = useState(false);
  const [roleId, setRoleId] = useState();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if(user) {
      user = JSON.parse(user)
      setRoleId(user?.user?.role_id);
    }

    if (session && !user) {
      console.log('SINI', {session, user})
      let payload = {
        email :session?.user?.email,
        full_name :session?.user?.name,
      };
      api
        .login(payload)
        .then((res) => {
          console.log(res.data, 'resres')
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((e) => {
          console.log(e, "error");
        });
    }

    if (status === "unauthenticated") {
      localStorage.removeItem("user");
    }
  }, [session, status]);

  // LOGIN  DRAWER
  const DIALOG_DRAWER = (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        fullWidth={isMobile}
        onClose={toggleDialog}
        sx={{
          zIndex: 9999,
        }}
      >
        <Login caption={"Masuk dengan Google"} />
      </Dialog>
    </Fragment>
  );

  // FOR SMALLER DEVICE
  if (downMd) {
    return (
      <HeaderWrapper className={clsx(className)}>
        <StyledContainer>
          {/* LEFT CONTENT - LOGO AND CATEGORY */}
          <Box>
            <MobileMenu />
          </Box>

          {/* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */}
          <FlexBox justifyContent="end" flex={1}>
            {!session && (
              <>
                <Box onClick={toggleDialog}>
                  <Button variant="outlined" color="primary">
                    Masuk
                  </Button>
                </Box>
              </>
            )}
            {session?.user && (
              <>
                <FlexBox gap={1.5} alignItems="center">
                  {roleId !== 1 ? (
                    <Link
                      href={`/profile`}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="contained" color="secondary">
                        Profil
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      href={`/dashboard`}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="contained" color="secondary">
                        Dashboard
                      </Button>
                    </Link>
                  )}
                  <Box>
                    <Link
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        signOut("google");
                      }}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="outlined" color="secondary">
                        Keluar
                      </Button>
                    </Link>
                  </Box>
                </FlexBox>
              </>
            )}
          </FlexBox>

          {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
          {DIALOG_DRAWER}
        </StyledContainer>
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <StyledContainer>
        <FlexBox mr={2} minWidth="170px" alignItems="center">
          <Link href={"/"}>
            <Image
              width={210}
              height={55}
              src="/assets/logo-santrihub.png"
              alt="logo"
            />
          </Link>
        </FlexBox>
        <FlexBox gap={1.5} alignItems="center">
          {!session && status === "unauthenticated" && (
            <>
              {MENU.map((i, index) => (
                <Link href={i.url} key={index}>
                  <Button>{i.title}</Button>
                </Link>
              ))}
              |
              <Box onClick={toggleDialog}>
                <Button variant="outlined" color="primary">
                  Masuk
                </Button>
              </Box>
            </>
          )}

          {status === "loading"
            ? null
            : session?.user && (
                <>
                  {MENU.map((i, index) => (
                    <Link href={i.url} key={index}>
                      <Button>{i.title}</Button>
                    </Link>
                  ))}
                  |
                  {roleId !== 1 ? (
                    <Link
                      href={`/profile`}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="contained" color="secondary">
                        Profil
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      href={`/dashboard`}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="contained" color="secondary">
                        Dashboard
                      </Button>
                    </Link>
                  )}
                  <Box>
                    <Link
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                      variant="outlined"
                      color="primary"
                    >
                      <Button variant="outlined" color="secondary">
                        Keluar
                      </Button>
                    </Link>
                  </Box>
                </>
              )}
        </FlexBox>
        {DIALOG_DRAWER}
      </StyledContainer>
    </HeaderWrapper>
  );
};
export default Header;
