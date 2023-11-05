import { styled, Box, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { H4 } from "./Typography";

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

export default function CardJalurMasuk({ data, campus }) {
  return (
    <StyledCard>
      <Link href={"/"}>
        <Box sx={{ overflow: "hidden", position: "relative" }}>
          <Image
            src={campus.logo}
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
        <Box sx={{ p: 1.5 }}>
          <Stack direction={"row"} spacing={1} sx={{ mb: -1, mt: -1.5 }}>
            <H4
              sx={{
                backgroundColor: `${data.isOpen ? "green" : "red"}`,
                color: "white",
                p: 0.7,
                borderRadius: 2,
                fontSize: 12,
              }}
            >
              {data.isOpen ? "Dibuka" : "Ditutup"}
            </H4>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: -4,
              color: "#0d47a1",
              fontWeight: 500,
            }}
          >
            <p>Pendaftaran</p>
            <p>{data.mulai_pendaftaran}</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "red",
              fontWeight: 400,
            }}
          >
            <p>Berakhir</p>
            <p>{data?.akhir_pendaftaran}</p>
          </Box>
        </Box>
      </Link>
    </StyledCard>
  );
}
