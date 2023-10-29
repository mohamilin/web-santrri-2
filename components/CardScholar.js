import { useCallback, useState } from "react";
import { styled, Box, useTheme, Chip, Stack } from "@mui/material";
import { FlexBetween } from "./flex-box";
import { useSnackbar } from "notistack";
import { useAppContext } from "@/helpers/contexts/AppContext";
import Link from "next/link";
import LazyImage from "./LazyImage";
import Image from "next/image";

// styled components
const StyledCard = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": {
      display: "flex",
    },
    "& .controlBox": {
      display: "flex",
      bottom: 0,
    },
  },
}));
const ImgBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  // padding: "0 40px 20px 40px",
  background: theme.palette.primary[100],
  // height: 190,
}));

const ItemController = styled(FlexBetween)(({ theme }) => ({
  width: 35,
  right: 15,
  height: 120,
  bottom: -120,
  background: "#fff",
  overflow: "hidden",
  position: "absolute",
  flexDirection: "column",
  transition: "bottom 0.3s ease-in-out",
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "8px 10px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: theme.palette.primary.main,
      "& svg": {
        color: "#fff",
      },
    },
  },
  "& svg": {
    fontSize: 18,
    color: theme.palette.grey[600],
  },
}));
const ContentWrapper = styled(Box)({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});
const StyledChip = styled(Box)(({ theme }) => ({
  zIndex: 11,
  width: 100,
  top: "16px",
  left: "0px",
  paddingLeft: 3,
  paddingRight: 3,
  borderRadius: 0,
  fontWeight: 600,
  fontSize: "20px",
  position: "absolute",
  background: theme.palette.primary.main,
}));

export default function CardScholar({ data }) {
  const { palette } = useTheme();
  return (
    <StyledCard>
      <Link href={"/"}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        <Image
          src={data.logo}
          width={500}
          height={500}
          alt="logo"
          style={{
            height: 190,
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{p:1.5}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb:-2, color:'#0d47a1', fontWeight: 500}}>
          <p>Pendaftaran</p>
          <p>{data.mulai_pendaftaran}</p>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', color: 'red', fontWeight: 400}}>
          <p>Berakhir</p>
          <p>{data.akhir_pendaftaran}</p>
        </Box>
      </Box>
      </Link>
    </StyledCard>
  );
}
