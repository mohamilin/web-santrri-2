import React from "react";
import { Box, styled, Container, Grid, IconButton } from "@mui/material";

import Link from "next/link";
import Image from "./Image";
import { Paragraph } from "./Typography";
import { FlexBox } from "./flex-box";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Youtube from "./icons/Youtube";
import { LinkedIn } from "@mui/icons-material";
import Twitter from "./icons/Twitter";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={2} overflow={"hidden"}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <Image
                    sx={{ width: 50, height: 50 }}
                    src="/assets/logo-circle.png"
                    alt="logo"
                  />
                </Link>
                <Paragraph mb={2.5} sx={{ mt: 2 }} color="grey.500">
                Santri Hub merupakan platform informasi kampus dan beasiswa terlengkap di Indonesia. 
                Serta Menyediakan Bimbingan Masuk Kampus Impian kamu.
                </Paragraph>
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Tentang Kami
                </Box>
                <div>
                  {aboutUs.map((item, ind) => (
                    <StyledLink href={`/${item.link}`} key={ind}>
                      {item.name}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Fitur
                </Box>

                <div>
                  {featureLinks.map((item, ind) => (
                    <StyledLink href={`/${item.link}`} key={ind}>
                      {item.name}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Kontak Kami
                </Box>

                <Box py={0.6} color="grey.500">
                Toll free:+62 8577 8209 309 <br/>
                (9:AM to 8:PM IST)
                </Box>

                <Box py={0.6} color="grey.500">
                Email:santri.hub2022@gmail.com
                </Box>
                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon
                          fontSize="inherit"
                          sx={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

const aboutUs = [
  { name: "Tentang Kami", link: "tentang-kami" },
  { name: "Berita dan Artikel", link: "blog" },
  { name: "Karir", link: "career" },
];

const featureLinks = [
  { name: "Info Kampus", link: "info-kampus" },
  { name: "Beasiswa", link: "beasiswa" },
  { name: "Jalur Masuk", link: "jalur-masuk" },
];

const iconList = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/santrihub.or.id",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/SantriHub",
    },
    {
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/santri-hub/ ",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/channel/UCw066RIuGX5MH5kI6E7P1Ew",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/santri.hub/",
    },
  ];