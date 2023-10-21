import React, { useEffect } from "react";
import { Box, Button, Card, Paper, styled } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import Image from "@/components/Image";

import { H1 } from "@/components/Typography";

const googleStyle = {
  background: "#4285F4",
  color: "white",
};

export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 400,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".googleButton": {
    ...googleStyle,
    "&:hover": googleStyle,
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

export default function Login({ caption }) {
  const { data: session } = useSession();


  return (
    <>
      <Wrapper>
        <Image
          src="/assets/logo-circle.png"
          sx={{
            m: "auto",
            width:50
          }}
          alt="logo"
        />
        <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          Selamat Datang di Santri Hub
        </H1>
        <Box mb={3} sx={{ textAlign: "center" }}>
          <Button
            size="medium"
            sx={{
              height: 44,
              width: 230,
              mt: 1,
              mx: 1,
              background: "#4285F4",
            }}
          >
            <Image src="/assets/images/icons/google-1.svg" alt="google" />
            {!session && (
              <>
                <a
                  href={`/api/auth/signin`}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <Box fontSize="12px" ml={1} s>
                    {caption}
                  </Box>
                </a>
              </>
            )}
          </Button>
        </Box>
      </Wrapper>
    </>
  );
}
